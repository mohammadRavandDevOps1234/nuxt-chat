<template>
  <v-card class="mx-auto" max-width="600" min-width="400">
    <v-card-title class="justify-content-center m-5 primary--text" primary-title>
      مرحله سوم
    </v-card-title>
      <validation-observer ref="observer" v-slot="{ invalid }">
      <form @submit.prevent="submit">
                
        <v-card-text  min-width="100%" height="400">
          <Map />
        </v-card-text>

      <v-card-text>

        <v-row>
          <v-col>
             <validation-provider 
          v-slot="{ errors }"
            name="طول جغرافیایی"
            rules="required"
          >
            <v-text-field
              id="lat"
              v-model="lat"
              :error-messages="errors"
              :min="10"
              required
              disabled
            ></v-text-field>
          </validation-provider>
          </v-col>


         

<v-col>

          <validation-provider
            v-slot="{ errors }"
            name="استان"
            rules="required"
          >
            <v-text-field
              id="lng"
              ref="latRef"
              v-model="lat"
              :error-messages="errors"
              required
              disabled
            ></v-text-field>
          </validation-provider>
</v-col>
        </v-row>

        <v-row>
          <v-col class="mx-auto text-center mt-3">
            <v-btn
              id="signup"
              class="mx-auto bg-blue white--text"
              
              color="pink"
              type="submit"
              @click.prevent="showBefore"
            >
              
              قبلی
            </v-btn>
          </v-col>
          <v-col class="mx-auto text-center mt-3">
            <v-btn
              id="signup"
              class="mx-auto bg-blue"
              
              color="primary"
              type="submit"
              
            >
              ثبت نام
              
            </v-btn>
          </v-col>
        </v-row>
  </v-card-text>
<p>{{invalid}}</p>
              </form>  
      </validation-observer>

  </v-card>
</template>

<script>
import {
  required,
  digits,
  email,
  min,
  max,
  regex,
} from 'vee-validate/dist/rules'
import {
  extend,
  ValidationObserver,
  ValidationProvider,
  setInteractionMode,
} from 'vee-validate'

import Map from '~/components/Map/Map.vue'

setInteractionMode('eager')

extend('digits', {
  ...digits,
  message: '{_field_} باید {length} عدد باشد. ({_value_})',
})

extend('required', {
  ...required,
  message: '{_field_} نباید خالی باشد',
})

extend('max', {
  ...max,
  message: '{_field_} نباید بیشتر از  {length} حرف باشد',
})
extend('min', {
  ...min,
  message: '{_field_} نباید کمتر از {length} کارکتر باشد',
})

extend('regex', {
  ...regex,
  message: '{_field_} {_value_} مطابقت ندارد با {regex}',
})

extend('email', {
  ...email,
  message: 'Email must be valid',
})

export default {
  components: {
    ValidationProvider,
    ValidationObserver,
    Map,
  },
  data: () => ({
    lat: '',
    lng: '',
  }),

  computed: {
    
  },
  methods: {
    fillLatLng(){
      this.lat = document.querySelector('#lat').value
      this.lng = document.querySelector('#lng').value
    },
    submit() {
      if(this.lat===''){
        this.fillLatLng();
      }
      this.$refs.observer.validate()
      const levelData = {
        lat: this.lat,
        lng: this.lng,
      }
      this.$emit('levelOneNext', levelData)
    },
    showBefore() {
      this.$emit('levelOneBefore', '')
    },
  },

  
}
</script>

<style lang="scss" scoped>
#signup.v-btn--disabled {
  background-color: rgb(214, 141, 156) !important;
  color: white !important;
}


.justify-content-center{
  justify-content: center;
}
</style>
