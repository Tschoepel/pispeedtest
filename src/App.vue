<template>
  <section class="section">
    <svg
      aria-hidden="true"
      style="position: absolute; width: 0; height: 0; overflow: hidden;"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <defs>
        <symbol
          id="icon-download3"
          viewBox="0 0 32 32"
        >
          <path d="M23 14l-8 8-8-8h5v-12h6v12zM15 22h-15v8h30v-8h-15zM28 26h-4v-2h4v2z" />
        </symbol>
        <symbol
          id="icon-loop2"
          viewBox="0 0 32 32"
        >
          <path d="M27.802 5.197c-2.925-3.194-7.13-5.197-11.803-5.197-8.837 0-16 7.163-16 16h3c0-7.18 5.82-13 13-13 3.844 0 7.298 1.669 9.678 4.322l-4.678 4.678h11v-11l-4.198 4.197z" />
          <path d="M29 16c0 7.18-5.82 13-13 13-3.844 0-7.298-1.669-9.678-4.322l4.678-4.678h-11v11l4.197-4.197c2.925 3.194 7.13 5.197 11.803 5.197 8.837 0 16-7.163 16-16h-3z" />
        </symbol>
      </defs>
    </svg>
    <div class="container">
      <div
        v-if="minimalValues[0] === 0"
        class="notification is-warning"
        style="margin-top: 1em;"
      >
        <span>Es wurden keine Minimalwerte erkannt! Bitte führen Sie folgenden
          Befehl in dem Ordner pispeedtest aus "cp .env.example .env" und
          starten dann den Server neu.
        </span>
      </div>
      <div class="card has-background-dark">
        <header class="card-header">
          <div class="columns is-vcentered">
            <div class="column">
              <p class="card-header-title has-text-white">
                Speedtest Ergebnisse
              </p>
            </div>
            <div class="column is-narrow">
              <p class="has-text-white item-center">
                <span
                  v-if="data !== null"
                  style="margin-lef: 2em;"
                >
                  {{ problematicData.length }}/{{ data.length }} ({{
                    percentage
                  }}%) Einträge problematisch
                </span>
              </p>
            </div>
            <div class="column has-text-right">
              <button
                :disabled="page <= 1"
                class="button is-small is-white"
                @click="setPage(page - 1)"
              >
                &lt;
              </button>
              <span
                class="tag is-light has-text-centered"
                style="width: 4em;"
              >
                {{ page }}/{{ maxPage }}
              </span>
              <button
                :disabled="page >= maxPage"
                class="button is-small is-white"
                @click="setPage(page + 1)"
              >
                &gt;
              </button>
            </div>
          </div>
        </header>
        <progress-bar :val="Math.round((timer * 100) / timerMax)" />
        <div
          class="card-content"
          style=""
        >
          <div class="content">
            <a
              class="button is-small is-success is-pulled-right"
              :class="{ 'is-active': objPerPage == 5 }"
              style="margin-left: 1rem;"
              @click="get()"
            >
              <span class="icon mx-0">
                <svg class="icomoon">
                  <use xlink:href="#icon-loop2" />
                </svg>
              </span>
            </a>
            <div
              class="field has-addons is-pulled-right"
              style="margin-bottom: 0;"
            >
              <p class="control">
                <a
                  class="button is-small is-white"
                  :class="{ 'is-active': objPerPage == 5 }"
                  @click="setObjects(5)"
                >
                  <span>5</span>
                </a>
              </p>
              <p class="control">
                <a
                  class="button is-small is-white"
                  :class="{ 'is-active': objPerPage == 10 }"
                  @click="setObjects(10)"
                >
                  <span>10</span>
                </a>
              </p>
              <p class="control">
                <a
                  class="button is-small is-white"
                  :class="{ 'is-active': objPerPage == 15 }"
                  @click="setObjects(15)"
                >
                  <span>15</span>
                </a>
              </p>
              <p class="control">
                <a
                  class="button is-small is-white"
                  :class="{ 'is-active': objPerPage == 20 }"
                  @click="setObjects(20)"
                >
                  <span>20</span>
                </a>
              </p>
            </div>
            <label
              class="checkbox is-pulled-right"
              style="margin-right: 1em;"
            >
              <input
                v-model="checked"
                type="checkbox"
              >
              Nur Problemfälle anzeigen
            </label>
            <div class="is-clearfix" />
            <div
              v-if="data === null || data.length == 0"
              class="notification is-warning"
              style="margin-top: 1em;"
            >
              <span
                v-if="!error"
              >Es stehen aktuell leider keine Daten zur Verfügung!<br>
                Bitte vergewissern Sie sich, dass der Cronjob korrekt
                läuft.</span>
              <span v-else>{{ error }}</span>
            </div>
            <table
              v-else
              class="table has-background-dark has-text-white is-narrow"
            >
              <thead>
                <tr>
                  <th>Datum</th>
                  <th>Zeit</th>
                  <th>Ping</th>
                  <th>DL</th>
                  <th>UL</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(item, index) in slicedData"
                  :key="index"
                  :style="
                    item.dl < minimalValues[0] || item.ul < minimalValues[1]
                      ? { 'background-color': '#463636' }
                      : ''
                  "
                >
                  <td data-label="Datum: ">
                    {{ item.date }}
                  </td>
                  <td data-label="Zeit: ">
                    {{ item.time }}
                  </td>
                  <td data-label="Ping: ">
                    {{ parseFloat(item.ping).toFixed(2) }}
                  </td>
                  <td
                    data-label="DL: "
                    :class="{ 'has-text-danger': item.dl < minimalValues[0] }"
                  >
                    {{ parseFloat(item.dl).toFixed(2) }}
                  </td>
                  <td
                    data-label="UL: "
                    :class="{ 'has-text-danger': item.ul < minimalValues[1] }"
                  >
                    {{ parseFloat(item.ul).toFixed(2) }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <footer class="card-foot">
          &copy; <span class="is-hidden-mobile">Copyright</span>
          {{ new Date().getFullYear() }} -
          <a
            href="https://www.tschoepel.de/"
            target="_blank"
            rel="noopener"
          >Tschoepel.de</a>. Alle Rechte vorbehalten.
          <a
            v-if="update"
            href="https://github.com/Tschoepel/pispeedtest/blob/master/UPGRADE.md"
            target="_blank"
            rel="noopener"
            class="button is-small is-success is-pulled-right"
            :class="{ 'is-active': objPerPage == 5 }"
            style="margin-left: 0.5rem;"
          >
            <span>Neues Update verfügbar!</span>
            <span class="icon mx-1">
              <svg class="icomoon">
                <use xlink:href="#icon-download3" />
              </svg>
            </span>
          </a>
          <span class="is-pulled-right">Version: {{ version }}</span>
        </footer>
      </div>
    </div>
  </section>
</template>

<script>
import ProgressBar from 'vue-simple-progress'

export default {
  name: 'App',
  components: { ProgressBar },
  data() {
    return {
      version: process.env.VUE_APP_VERSION,
      loading: false,
      err: false,
      error: null,
      data: null,
      page: 1,
      objPerPage: 10,
      minimalValues: [999, 999],
      checked: false,
      interval: null,
      timer: 0,
      timerMax: 300,
      update: false
    }
  },
  computed: {
    url() {
      return process.env.NODE_ENV === 'development'
        ? 'http://localhost:3030'
        : ''
    },
    maxPage: function() {
      return this.filteredData !== null
        ? Math.ceil(this.filteredData.length / this.objPerPage)
        : null
    },
    filteredData: function() {
      if (!this.checked) {
        return this.data
      } else {
        return this.problematicData
      }
    },
    problematicData: function() {
      return this.data.filter(item => {
        return (
          item.dl < this.minimalValues[0] || item.ul < this.minimalValues[1]
        )
      })
    },
    slicedData: function() {
      return this.filteredData.slice(
        (this.page - 1) * this.objPerPage,
        this.page * this.objPerPage
      )
    },
    percentage: function() {
      return (
        Math.round(
          ((this.problematicData.length * 100) / this.data.length) * 10
        ) / 10
      )
    }
  },
  watch: {
    maxPage: function() {
      if (this.page > this.maxPage) this.page = this.maxPage
    }
  },
  mounted() {
    this.get()
    this.getMin()
    this.check()
    this.interval = setInterval(this.count, 1000)
  },
  beforeDestroy() {
    clearInterval(this.interval)
  },
  methods: {
    count: function() {
      this.timer = this.timer + 1
      if (this.timer == this.timerMax) {
        this.get()
        this.timer = 1
      }
    },
    get() {
      this.timer = 1
      this.loading = true
      this.$http
        .get(this.url + '/api')
        .then(response => {
          var res = response.data
          if (res.indexOf('date')) this.data = response.data
          else this.error = response.data
        })
        .catch(error => {
          console.error(error)
          if (
            typeof error.response !== 'undefined' &&
            typeof error.response.data !== 'undefined'
          ) {
            error = error.response.data
          }
          this.err = true
        })
        .then(() => {
          this.loading = false
        })
    },
    getMin() {
      this.$http
        .get(this.url + '/min')
        .then(response => {
          var res = response.data
          if (isNaN(res['DL'])) {
            this.$set(this.minimalValues, 0, 0)
            this.$set(this.minimalValues, 1, 0)
          } else {
            this.$set(this.minimalValues, 0, parseInt(res['DL']))
            this.$set(this.minimalValues, 1, parseInt(res['UL']))
          }
        })
        .catch(error => {
          console.error(error)
          this.error = error
        })
    },
    check() {
      this.$http
        .get(
          'https://raw.githubusercontent.com/Tschoepel/pispeedtest/master/package.json'
        )
        .then(response => {
          var res = response.data
          if (this.version < res.version) this.update = true
        })
        .catch(error => {
          console.error(error)
          this.error = error
        })
    },
    setPage(page) {
      if (page < 1) page = 1
      if (page > this.maxPage) page = this.maxPage
      this.page = page
    },
    setObjects(num) {
      this.objPerPage = num
      if (this.page > this.maxPage) {
        this.page = this.maxPage
      }
    }
  }
}
</script>

<style lang="scss">
@import '~bulma';
body,
html {
  height: 100%;
  background-color: #1d2127;
  color: #808697;
}
.section {
  padding: 1.5rem;
}
.table th {
  color: inherit !important;
}
.card {
  color: inherit;
  background: #2e353e;
  box-shadow: none;
}

.title,
.card-header-title {
  color: #fff;
}

.card-header {
  background: #282d36;
  border-bottom: 1px solid #1d2127;
  display: block;
  padding: 0.75rem;
}

.card-header .button {
  margin: 0 0.5rem;
}
.column {
  padding: 0;
}

.card-foot {
  background: #282d36;
  border-top: 1px solid #1d2127;
  padding: 0.75rem;
}
a {
  color: hsl(217, 71%, 68%);
}
a:hover {
  color: hsl(217, 71%, 78%);
}

.item-center {
  align-items: center;
  display: flex;
  flex-grow: 0;
}
.content p:not(:last-child) {
  margin-bottom: 0;
}
.table.is-striped tbody tr:not(.is-selected):nth-child(even) {
  background-color: hsla(0, 0%, 25%, 1);
}
.content table td,
.content table th {
  border: 1px solid hsl(0, 0%, 18%);
  border-width: 1px 0px;
  padding: 0.5em 0.75em;
  vertical-align: top;
}

.checkbox:hover,
.radio:hover {
  color: white;
}

@media screen and (max-width: 500px) {
  thead {
    display: none;
  }
  table {
    margin-top: 1em;
  }

  tr {
    float: left;
    width: 100%;
    margin-bottom: 2em;
  }

  td {
    float: left;
    width: 100%;
    padding: 1em;
  }

  td::before {
    content: attr(data-label);
    box-sizing: border-box;
    word-wrap: break-word;
    width: 20%;
  }
}

.icomoon {
  display: inline-block;
  width: 1.0rem;
  height: 1.0rem;
  stroke-width: 0;
  stroke: currentColor;
  fill: currentColor;
}

/* ==========================================
Single-colored icons can be modified like so:
.icon-name {
  font-size: 32px;
  color: red;
}
========================================== */

</style>
