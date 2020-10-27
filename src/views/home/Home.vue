<template>
  <v-container>
    <v-row align="start">
      <v-col md="4" lg="4" sm="3">
        <v-card height="400" width="auto" class="mx-auto">
          <v-navigation-drawer permanent>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="title"> Filter </v-list-item-title>
                <!-- <v-list-item-subtitle> subtext </v-list-item-subtitle> -->
              </v-list-item-content>
            </v-list-item>

            <v-divider></v-divider>

            <v-list dense nav>
              <v-list-item
                v-for="item in items"
                :key="item.title"
                link
                @click="item.click"
              >
                <v-list-item-icon>
                  <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-navigation-drawer>
        </v-card>
      </v-col>
      <v-col>
        <div class="content-containter">
          <v-card
            class="card-content"
            elevation="11"
            outlined
            v-for="(country, index) in requiredCountries"
            :key="country.name"
          >
            <h3 @click="getLeagues(country, index)">{{ country.country }}</h3>
            <div class="flag">
              <img :src="country.flag" height="100px" width="100px" />
            </div>
          </v-card>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState, mapMutations } from "vuex";

export default Vue.extend({
  name: "Home",
  data: function () {
    return {
      countries: [],
      countryGroup: "",
      items: [
        {
          title: "Popular",
          icon: "mdi-home",
          click: (event: MouseEvent) => {
            this.countryGroup = "popular";
          },
        },
        {
          title: "African",
          icon: "mdi-image",
          click: (event: MouseEvent) => {
            this.countryGroup = "africa";
          },
        },
        {
          title: "Others",
          icon: "mdi-help-box",
          click: (event: MouseEvent) => {
            this.countryGroup = "other";
          },
        },
        {
          title: "All",
          icon: "mdi-help-box",
          click: (event: MouseEvent) => {
            this.countryGroup = "";
          },
        },
      ],
      right: null,
    };
  },
  computed: {
    ...mapState({
      selectedCountry: (state: any) => state.selectedCountry,
      requiredCountry: (state: any) => {
        return {
          popular: state.lookups.popularCountry,
          african: state.lookups.africanCountry,
          others: state.lookups.otherCountry,
          all: [
            ...state.lookups.popularCountry,
            ...state.lookups.africanCountry,
            ...state.lookups.otherCountry,
          ],
        };
      },
    }),
    requiredCountries() {
      let all: any = this.requiredCountry.all;
      const countries = this.countries;
      if (this.countryGroup !== "") {
        if (this.countryGroup === "africa") {
          all = this.requiredCountry.african;
        } else if (this.countryGroup === "popular") {
          all = this.requiredCountry.popular;
        } else if (this.countryGroup === "other") {
          all = this.requiredCountry.others;
        }
      }
      return countries.filter((country: any) => all.includes(country.country));
      // return [];
    },
  },

  methods: {
    ...mapMutations(["selectcountry", "selectLeague"]),
    getLeagues(country: any, index: number) {
      this.$store.commit("selectcountry", { country });
      this.$router.push("leagues");
      // this.$http
      //   .get(`leagues/current/${country.country}`)
      //   .then((response: any) => {
      //     const data = response.data;
      //     console.log("Result is ", response);
      //   })
      //   .catch((error: any) => {
      //     console.error("Error", error);
      //   });
    },
  },
  mounted: function () {
    this.$http
      .get("countries")
      .then((response: any) => {
        const data = response.data;
        // console.log("Result is ", response);
        this.countries = data.api.countries;
      })
      .catch((error: any) => {
        console.error("Error", error);
      });
  },
  components: {},
});
</script>

<style lang="scss" scoped>
.content-containter {
  display: flex;
  flex-direction: row;
  flex-flow: wrap;
  justify-content: center;
  .card-content {
    min-height: 100px;
    height: auto;
    min-width: 200px;
    max-width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: beige;
    margin: 20px 20px;
    .flag {
      display: flex;
      margin-top: 10px;
    }
    h3 {
      margin-top: 20px;
    }
    h3:hover {
      cursor: pointer;
      color: darkgray;
    }
  }
}
</style>
