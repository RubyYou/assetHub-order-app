<template>
    <div class ="repeat-inputs">
        <f7-list-item v-for="n in (params.max/params.step)">
            <f7-label>{{getCurrentText(n)}}</f7-label>
            <f7-input :type="params.type || 'text'"
                v-model="form[addPreFix(n)]"
                @change = "(e) => { updateForm ({name: addPreFix(n), data: e.target.value})}" />
        </f7-list-item>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  props: {
    params: Object
  },
  computed: mapState ({
    form: state => state.forms.selectedForm
  }),
  methods: {
    updateForm ({name, data}) {
        this.$store.dispatch ('updateForm', {name, data})
    },
    getCurrentText (n) {
        return (n * this.params.step).toFixed(this.params.toFixed)
    },
    addPreFix (n) {
        let number = this.getCurrentText(n)
        number = number.split(".").join("-")
        return number
    }
  }
}
</script>
<style lang="scss" scoped >
.repeat-inputs{
    background:white;
}
.repeat-inputs li {
    width: 100%;
    list-style: none;
}
</style>
