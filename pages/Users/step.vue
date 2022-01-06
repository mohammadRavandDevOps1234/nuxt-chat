<template>
  <v-stepper v-model="e1">
    <v-stepper-header>
      <v-stepper-step :complete="e1 > 1" step="1"> مرحله اول </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 2" step="2"> مرحله دوم </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step  :complete="e1 > 3" step="3"> مرحله سوم </v-stepper-step>
      <v-divider></v-divider>

      <v-stepper-step  :complete="e1 > 4" step="4"> مرحله نهایی </v-stepper-step>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">
        <RegisterUserLevelOne
          @levelOneNext="saveLevelOne"
        ></RegisterUserLevelOne>
      </v-stepper-content>

      <v-stepper-content step="2">
        <RegisterUserLevelTwo
          @levelOneNext="saveLevelTwo"
          @levelOneBefore="showLevelOne"
        ></RegisterUserLevelTwo>
      </v-stepper-content>

      <v-stepper-content step="3">
        <RegisterUserLevelThree
          @levelOneNext="saveLevelThree"
          @levelOneBefore="showLevelTwo"
        ></RegisterUserLevelThree>
      </v-stepper-content>

      <v-stepper-content step="4">
        <v-card>
          <v-card-text>
           

            <div class="text-center">

              <v-alert prominent class="py-5"  elevation="3" colored-border>
                 <div class="text-center my-5">
              <v-progress-circular
                :size="70"
                :width="7"
                color="purple"
                indeterminate
              ></v-progress-circular>
            </div>
                <v-row align="center" class="mt-3">
                  <v-col class="grow">
                    درحال انجام عملیات لطفا صبر کنید
                  </v-col>
                  
                </v-row>
              </v-alert>
              
              <v-alert prominent type="error"  color="success" icon="mdi-check-outline">
                <v-row align="center">
                  <v-col class="grow">
                    ثبت نام شما با موفقیت انجام شد.
                  </v-col>
                  <v-col class="shrink">
                    <v-btn class="primary" @click="redirectToMainPage"> صفحه اصلی</v-btn>
                  </v-col>
                </v-row>
              </v-alert>

              <v-alert prominent type="error">
                <v-row align="center">
                  <v-col class="grow">
                    ثبت نام شما انجام نشد.
                  </v-col>
                  <v-col class="shrink">
                    <v-btn class="info" @click="e1=1">دوباره تلاش کنید</v-btn>
                  </v-col>
                </v-row>
              </v-alert>
            </div>
          </v-card-text>
        </v-card>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>

<script>
import RegisterUserLevelOne from '~/components/User/Register/RegisterUserLevelOne.vue'
import RegisterUserLevelTwo from '~/components/User/Register/RegisterUserLevelTwo.vue'
import RegisterUserLevelThree from '~/components/User/Register/RegisterUserLevelThree.vue'

export default {
  components: {
    RegisterUserLevelOne,
    RegisterUserLevelTwo,
    RegisterUserLevelThree,
  },
  data() {
    return {
      e1: 1,
      userInfo: {
        levelOne: {
          firstName: '',
          phoneNumber: '',
          selectedRole: '',
        },
        levelTwo: {},
        levelThree: {},
      },
      isActiveLevelTwo: false,
      isActiveLevelOne: false,
      isActiveLevelThree: false,
    }
  },
  created(){
      this.e1 = 4;
  },
  methods: {
    saveLevelOne(data) {
      this.userInfo.levelOne = data
      this.e1 = 2
    },
    saveLevelTwo(data) {
      this.userInfo.levelTwo = data
      this.e1 = 3
    },
    saveLevelThree(data) {
      this.userInfo.levelThree = data
      this.e1 = 4
    },
    showLevelOne() {
      this.e1 = 1
    },
    showLevelTwo() {
      this.e1 = 2
    },
    redirectToMainPage(){
        this.$router.push('/')
    }
  },
}
</script>