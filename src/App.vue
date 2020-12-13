<template>
  <div id="app">

    <HelloWorld msg="Hello-world"/>
     <Bootstrap />
     <String_interpolation_dynamic_attributes />
 <V_Bind />
 <List />
 <V_if_else />
 <V_For />
<Click_function />
<Event_key_modifier />
<Hook_life_cycle />
<Raw_html />
<Computed_property />
<Style_class_objects />
<Parent />

    
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import V_Bind from './components/V_Bind'
import List from './components/List'
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


export default {
  name: 'App',
  components: 
  {
    HelloWorld,V_Bind,List,V_if_else,V_For,Click_function,
    Event_key_modifier,Bootstrap,String_interpolation_dynamic_attributes
  ,Hook_life_cycle,Raw_html,Computed_property,Style_class_objects,Parent
  }
}
</script>
,
    Bootstrap
<style>

</style>
