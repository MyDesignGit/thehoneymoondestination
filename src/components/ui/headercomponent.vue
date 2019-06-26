<template> 
  <b-navbar toggleable="lg" type="dark"  class="headerheight">
  <b-container>
  <b-navbar-brand href="#">Honeymoon Destination</b-navbar-brand>
  <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
      <b-navbar-nav>
        <b-nav-item href="#">Home</b-nav-item>
        <b-nav-item href="#">Packages</b-nav-item>
        <b-nav-item href="#">Why to Choose us</b-nav-item>
        <b-nav-item href="#">Services</b-nav-item>
        <b-nav-item href="#">Places</b-nav-item>
        <b-nav-item href="#">Guides</b-nav-item>

        <!-- <b-nav-item href="#" disabled>Disabled</b-nav-item> -->
      </b-navbar-nav>

       <!--  <b-nav-item-dropdown text="Lang" right>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">RU</b-dropdown-item>
          <b-dropdown-item href="#">FA</b-dropdown-item>
        </b-nav-item-dropdown> -->

       <!--  <b-nav-item-dropdown right>
          Using 'button-content' slot
          <template slot="button-content"><em>User</em></template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown> -->
      </b-navbar-nav>
    </b-collapse>
</b-container>
  </b-navbar>

</template>
<script>
export default {
  name: 'headercomponent'
}
</script>
