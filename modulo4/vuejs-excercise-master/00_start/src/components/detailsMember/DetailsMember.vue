<template>
  <v-container>
    <v-layout align-center justify-center row fill-height>
      <v-card width="500">
          <div class="text-xs-center">
                <v-avatar size="180">
                    <v-img :src="member.avatar_url"></v-img>
                </v-avatar>
            </div>
        <v-card-title>
            <v-container grid-list-md class="text-xs-center">
                <v-flex xs12>
                    <span class="grey--text">{{member.name}}</span>
                </v-flex>
                <v-flex xs12>
                    <span class="grey--text">{{member.id}}</span>
                </v-flex>
                <v-flex xs12>
                    <span class="grey--text">{{member.login}}</span>
                </v-flex>
                <v-flex xs12>
                    <span class="grey--text">{{member.company}}</span>
                </v-flex>
                <v-flex xs12>
                    <span class="grey--text">{{member.location}}</span>
                </v-flex>
            </v-container>
        </v-card-title>
      </v-card>
    </v-layout>
  </v-container>
</template>

<script lang='ts'>
import Vue from "vue";
import { getDetailsMember } from "../../api/memberAPI";
import { Member, createDefaultMember } from "../../model/member";

export default Vue.extend({
  name: "DetailsMember",
  props: {
    login: String
  },
  data: () => ({
    member: createDefaultMember(),
    show: false,
  }),

  async created() {
    getDetailsMember(this.login).then((data: Member) => {
      this.member = data;
    });
  }
});
</script>

<style module>
    .centered {
        text-align: 'center';
    }
</style>
