<template>
  <v-card class="mx-auto" max-width="600" min-width="400">
    <v-card-title class="justify-content-center m-5  primary--text" primary-title>
      مرحله دوم
    </v-card-title>
    <v-card-text>
      <validation-observer ref="observer" v-slot="{ invalid }">
      <form @submit.prevent="submit">
        
        <validation-provider v-slot="{ errors }" name="استان" rules="required">
          <v-select
            v-model="province"
            :items="provinces"
            :error-messages="errors"
            label="استان"
            data-vv-name="استان"
            required
          ></v-select>
        </validation-provider>

        <validation-provider v-slot="{ errors }" name="شهر" rules="required">
          <v-select
            v-model="city"
            :items="cities"
            :error-messages="errors"
            label="شهر"
            data-vv-name="شهر"
            required
          ></v-select>
        </validation-provider>

        <validation-provider v-slot="{ errors }" name="منطقه" rules="required">
          <v-select
            v-model="region"
            :items="regions"
            :error-messages="errors"
            label="منطقه"
            data-vv-name="منطقه"
            required
          ></v-select>
        </validation-provider>

          <v-row>
          <v-col class="mx-auto text-center mt-3">
            <v-btn  id="signup" class="mx-auto bg-blue white--text" @click.prevent="showBefore"  color="pink" type="submit"> 
              
               قبلی </v-btn>
          </v-col>
           <v-col class="mx-auto text-center mt-3">
              
            <v-btn  id="signup" class="mx-auto bg-blue "  color="primary" type="submit"  :disabled="invalid">
               بعدی 
              
                </v-btn>
          </v-col>
        </v-row>
        
      </form>
    </validation-observer>
    </v-card-text>

    <v-card-actions>
      
    </v-card-actions>
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
    ValidationObserver
  },
  data: () => ({
    provinces:['کردستان','تهران','کرمان','اصفهان'],
    cities:['مریوان','سقز','بانه','بوکان'],
    regions:['1','2','3'],
    province:'',
    city:'',
    region:''
  }),

  methods: {
    submit() {
      this.$refs.observer.validate()

      const levlOneData ={province:this.province,city:this.city,region:this.region};
      this.$emit('levelOneNext',levlOneData)
    },
    showBefore(){
      this.$emit('levelOneBefore',1)
    }
    
  },
  
}
</script>

<style lang="scss" scoped>
#signup.v-btn--disabled{
  background-color:rgb(214, 141, 156) !important;
  color:white !important;
}


.justify-content-center{
  justify-content: center;
}</style>
