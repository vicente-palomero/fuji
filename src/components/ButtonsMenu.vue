<template>
  <div class="buttonsMenu">
    <div class="row">
      <div class="column">
        <Start class="button work" label="Work" type="work"/>
      </div>
      <div class="column">
        <Start class="button study" label="Study" type="study"/>
      </div>
      <div class="column">
        <Start class="button side" label="Side" type="side"/>
      </div>
    </div>
    <div class="row">
      <div class="column">
        <Start class="button home" label="Home" type="home"/>
      </div>
      <div class="column">
        <Start class="button health" label="Health" type="health"/>
      </div>
      <div class="column">
        <Start class="button other" label="Other" type="other"/>
      </div>
    </div>
    <div class="row">
      <div class="column">
        <Clean class="button" />
      </div>
    </div>
  </div>
</template>

<script>
import Start from './buttons/Start'
import Clean from './buttons/Clean'

export default {
  name: 'ButtonsMenu',
  components: {
    Clean,
    Start
  }
}
</script>
<style scoped>
.row {
  display: flex;
  justify-content: center;
}
.column {
  padding: 0;
  margin: 0;
}
.button {
  margin: 1vw;
  width: 30vw;
  background-color: white;
  border-radius: 7px;
  border: 2px solid;
}
</style>
