<template>
<div id="app">

  <div class="heading-title">
    <p>Welcome to Honeymoon Destination</p>
    <h1>Let's Discover The World Together</h1>
    <p>More Than 1200 Destinations.</p>
    <h2>Staring From 50,000*</h2>
    <p>Per Person</p>
    
  </div>

  <div class="formcomponents">
    <h4>Provide your details below</h4>
  <hr class="hr">
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">

       <b-form-group id="input-group-2" label="Full Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.name"
          required
          placeholder="Enter name"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          required
          placeholder="Enter email"
        ></b-form-input>
      </b-form-group>

     

      <b-form-group id="input-group-2" label="Your Contact:" label-for="input-4">
        <b-form-input
          id="input-4"
          v-model="form.phone"
          required
          placeholder="Enter phone Number"
        ></b-form-input>
      </b-form-group>

      

    

      <b-button type="submit" variant="primary">Submit</b-button>
     <!--  <b-button type="reset" variant="danger">Reset</b-button> -->
    </b-form>
  </div>
  <headercomponent/>
    <slider/>
    <honeymoontours/>
    <destinationtours/>
    <choose/>
    <aboutus/>
      <footerComponent/>
      </div>
      </template>
      <script>
      import headercomponent from '@/components/ui/headercomponent'
      import slider from '@/components/slider'
      import honeymoontours from '@/components/ui/honeymoontours'
      import destinationtours from '@/components/ui/destinationtours'
      import choose from '@/components/ui/choosecomponent'
      import aboutus from '@/components/ui/aboutus'
      import footerComponent from '@/components/ui/footer'
      export default {
       data() {
      return {
        form: {
          email: '',
          name: '',
          phone:'',
          food: null,
          checked: []
        },
        foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
        show: true
      }
        },
      name: 'app',
      components: {
      slider,
      headercomponent,
      honeymoontours,
      destinationtours,
      choose,aboutus,footerComponent
      },
       computed: {
      validation() {
        return this.userId.length > 4 && this.userId.length < 13
      }
    }

      }
      </script>