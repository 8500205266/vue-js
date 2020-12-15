<template>
  <div id="app">

    <HelloWorld msg="Hello-world"/>
     <Bootstrap />
     <String_interpolation_dynamic_attributes />
 <V_Bind />

 <V_if_else />
 <V_For />
<Click_function />
<Event_key_modifier />
<Hook_life_cycle />
<Raw_html />
<Computed_property />
<Style_class_objects />
<Parent />
<Hello />

<Use_slots>
      <p>I'm from parent</p>
      <p>I am from Parent</p>
   </Use_slots>
   <Use_slots>
       <div class="header1">
              <h2>i am from header</h2>
            </div>
  
           <h2>im from main</h2>
            <h2>im from out of context</h2>

            <div class="footer">
                <h2>i am from footer</h2>
            </div>
    </Use_slots>


  <keep-alive>
            <component v-bind:is="component"></component>
        </keep-alive>
        <button v-on:click="component = 'Form_one'">Show form one</button>
        <button v-on:click="component = 'Form_two'">Show form two</button>

        <List/>
          <div>
    <router-link to="friends/1/2/3">Friends</router-link>
    <router-link to="account">Account</router-link>
    <router-link to="contact">Contact</router-link>

    <router-link :to="{ name: '/Account'}">Account</router-link>
    <router-view/>

  </div>

<option_merging />
<axios />
  
    </div>

</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import V_Bind from './components/V_Bind'

import V_if_else from './components/V_if_else'
import V_For from './components/V_For'
import Click_function from './components/Click_function'

import Event_key_modifier from './components/Event_key_modifier'

import Bootstrap from './components/Bootstrap'

import String_interpolation_dynamic_attributes from './components/String_interpolation_dynamic_attributes'

import Hook_life_cycle from './components/Hook_life_cycle'

import Raw_html from './components/Raw_html'

import Computed_property from './components/Computed_property'

import Style_class_objects from './components/Style_class_objects'

import Parent from './components/Parent'

import Use_slots from './components/Use_slots'

import Form_one from './components/Form_one'
import Form_two from './components/Form_two'

import List from './components/List'

import HelloWorld1 from './components/HelloWorld1'

import option_merging from './components/option_merging'

import Axios from './components/Axios'


export default {
  name: 'App',
  components: 
  {
    HelloWorld,V_Bind,V_if_else,V_For,Click_function,
    Event_key_modifier,Bootstrap,String_interpolation_dynamic_attributes
  ,Hook_life_cycle,Raw_html,Computed_property,Style_class_objects,
  Parent,Use_slots,Form_one,Form_two,List,HelloWorld1,option_merging,
    Axios
  }
,    data () {
        return {
            component: 'Form_one'
        }
    },
    methods: {
        handleSubmit: function(){
            alert('thanks for submitting');
        }
}
}
</script>
<style>

</style>
