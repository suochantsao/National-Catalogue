<template>

    <div class="listItem container p-5 my-4 col-10 d-flex">
      <img class="w-25" :src="nationItem.flag" alt="" srcset="">
      <ul class="nationInfo d-flex flex-wrap">
        <li class="w-100 py-4">
          <h2 @click="selectItem"><a v-b-modal.modal-lg>{{nationItem.name}} </a><span class="styleGrey ms-3">{{nationItem.nativeName}}</span></h2>
        </li>
        <li class="w-100"><span class="fw-bold">Alt Spellings : </span>{{altList}}</li>
        <li class="w-25"><span class="fw-bold">Calling Codes : </span>{{nationItem.callingCodes[0]}}</li>
        <li class="w-25"><span class="fw-bold">Alpha 2 Code : </span>{{nationItem.alpha2Code}}</li>
        <li class="w-25"><span class="fw-bold">Alpha 3 Code : </span>{{nationItem.alpha3Code}}</li>
      </ul>
    </div>

</template>

<script>
export default {
  name: 'listItem',
  props: [
    'nationItem'
  ],
  methods: {
    selectItem () {
      this.itemInfo = this.nationItem
      const lang = []
      lang.push(this.nationItem.translations)
      this.langList = lang
      this.$emit('nationDetail', this.itemInfo)
      this.$emit('nationLangList', this.langList)
      console.log(this.itemInfo)
    }
  },
  data () {
    return {
      altList: null,
      itemInfo: null,
      langList: []
    }
  },
  created () {
    this.altList = this.nationItem.altSpellings.join(', ')
  }
}
</script>
