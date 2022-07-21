<template>
  <div>
    <v-app-bar :clipped-left="$vuetify.breakpoint.lgAndUp" app color="white">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title style="width: 300px" class="ml-0 pl-4">
        <div class="flex gap-5">
          <v-img
            lazy-src="@/assets/logo.svg"
            max-height="40"
            max-width="40"
            src="@/assets/logo.svg"
          ></v-img>
          <span class="flex justift-center align-center font-bold"
            >eCampus</span
          >
        </div>
      </v-toolbar-title>
      <v-text-field
        solo
        clearable
        dense
        flat
        hide-details
        append-icon="mdi-magnify"
        label="Пошук"
        class="hidden-sm-and-down max-w-lg border"
      ></v-text-field>
      <v-spacer></v-spacer>
      <v-btn icon class="mr-4">
        <v-icon>mdi-bell-outline</v-icon>
      </v-btn>
      <v-avatar color="orange" size="36">ГО</v-avatar>
      <span class="font-medium ml-2"
        >Гарган Олексiй <v-icon>mdi-menu-down</v-icon></span
      >
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      :clipped="$vuetify.breakpoint.lgAndUp"
      app
    >
      <v-list dense shaped>
        <template v-for="(item, index) in items">
          <v-row v-if="item.heading" :key="item.heading" align="center">
            <v-col cols="6">
              <v-subheader v-if="item.heading">
                {{ item.heading }}
              </v-subheader>
            </v-col>
            <v-col cols="6" class="text-center">
              <a href="#!" class="body-2 black--text">Редагувати</a>
            </v-col>
          </v-row>
          <!-- <v-list-group
            v-else-if="item.children"
            :key="item.text"
            v-model="item.model"
            :prepend-icon="item.model ? item.icon : item['icon-alt']"
            append-icon=""
          >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>
                  {{ item.text }}
                </v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item
              v-for="(child, i) in item.children"
              :key="i"
              link
              :to="child.link"
              active-class="green--text text--accent-4"
            >
              <v-list-item-action v-if="child.icon">
                <v-icon>{{ child.icon }}</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>
                  {{ child.text }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group> -->
          <v-divider v-if="item.type === 'divider'" :key="index"></v-divider>
          <v-list-item
            v-else
            :key="item.text"
            link
            :to="item.link"
            active-class="green white--text"
          >
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                {{ item.text }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data: function () {
    return {
      drawer: null,
      items: [
        { icon: "mdi-account-circle", text: "Профiль", link: "/profile" },
        {
          icon: "mdi-check-decagram",
          text: "Поточний контроль",
          link: "/history",
        },
        { icon: "mdi-table", text: "Результати атестації", link: "/history" },
        { type: "divider" },
        {
          icon: "mdi-format-list-numbered",
          text: "Вибір дисциплін",
          link: "/history",
        },
        { icon: "mdi-school-outline", text: "Сесія", link: "/history" },
        {
          icon: "mdi-clipboard-search",
          text: "Навчальний план",
          link: "/history",
        },
        { icon: "mdi-bullhorn", text: "Опитування", link: "/history" },
        { icon: "mdi-notebook", text: "Метод. забезпечення", link: "/history" },
        {
          icon: "mdi-card-account-details-outline",
          text: "Контакти",
          link: "/history",
        },
        { type: "divider" },
        { icon: "mdi-cog", text: "Налаштування", link: "/history" },
        { icon: "mdi-logout", text: "Вийти", link: "/history" },
        { type: "divider" },
        // { // для вложенного списка
        //   icon: "mdi-chevron-down",
        //   "icon-alt": "mdi-telegram",
        //   text: "Телеграм повiдомлення",
        //   model: false,
        //   children: [
        //     {
        //       icon: "mdi-folder-network-outline",
        //       text: "Дерево папок",
        //       link: "/folder-tree",
        //     },
        //     {
        //       icon: "mdi-family-tree",
        //       text: "Дерево",
        //       link: "/tree",
        //     },
        //   ],
        // },
        //   { icon: 'mdi-cog', text: 'Settings' },
        //   { icon: 'mdi-message', text: 'Send feedback' },
        //   { icon: 'mdi-help-circle', text: 'Help' },
        //   { icon: 'mdi-cellphone-link', text: 'App downloads' },
        //   { icon: 'mdi-keyboard', text: 'Go to the old version' },
      ],
    };
  },

  computed: {
    ...mapGetters(["isAuthenticated"]),
  },
};
</script>

<style lang="scss" scoped>
</style>