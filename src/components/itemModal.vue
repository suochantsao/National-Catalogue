<template>
    <div>
      <b-modal class="modal" id="modal-lg" size="xl" hide-footer>
          <!-- Modal Header -->
          <template #modal-header="{ close }">
            <h2 class="ms-3">{{nationItem.name}}<span class="styleGrey ms-3">{{nationItem.nativeName}}</span></h2>
            <b-button size="sm" variant="outline-simple" @click="close()">
                <fa-icon icon="times" class="icon" />
            </b-button>
          </template>
          <!-- Other Info -->
          <div class="container d-flex">
            <img class="ms-2 my-2 w-50" :src="nationItem.flag" alt="flag">
            <ul class="container d-flex flex-wrap ms-2 mt-1">
                <li class="mx-3 my-2  w-100">
                    <span class="fw-bold">Area : </span>
                    {{nationItem.area}}
                </li>
                <li class="mx-3 my-2  w-100">
                    <span class="fw-bold">Borders : </span>
                    {{nationItem.borders.join(', ')}}
                </li>
                <li class="mx-3 my-2  w-100">
                    <span class="fw-bold">Capital : </span>
                    {{nationItem.capital}}
                </li>
                <li class="mx-3 my-2  w-100">
                    <span class="fw-bold">CIOC : </span>
                    {{nationItem.cioc}}
                </li>
                <li class="mx-3 my-2  w-100">
                    <span class="fw-bold">Demonym : </span>
                    {{nationItem.demonym}}
                </li>
                <li class="mx-3 my-2  w-100">
                    <span class="fw-bold">GINI : </span>
                    {{nationItem.gini}}
                </li>
                <li class="mx-3 my-2  w-100">
                    <span class="fw-bold">Latlng : </span>
                    {{nationItem.latlng.join(', ')}}
                </li>
                <li class="mx-3 my-2  w-100">
                    <span class="fw-bold">NumericCode : </span>
                    {{nationItem.numericCode}}
                </li>
                <li class="mx-3 my-2  w-100">
                    <span class="fw-bold">Population : </span>
                    {{nationItem.population}}
                </li>
                <li class="mx-3 my-2  w-100">
                    <span class="fw-bold">Region : </span>
                    {{nationItem.region}}
                </li>
                <li class="mx-3 my-2  w-100">
                    <span class="fw-bold">Subregion : </span>
                    {{nationItem.subregion}}
                </li>
                <li class="mx-3 my-2  w-100">
                    <span class="fw-bold">Timezones : </span>
                    {{nationItem.timezones[0]}}
                </li>
                <li class="mx-3 my-2  w-100">
                    <span class="fw-bold">Top Level Domain : </span>
                    {{nationItem.topLevelDomain[0]}}
                </li>
                <li class="mx-3 my-2  w-100">
                    <span class="fw-bold">Regional Blocs : </span>
                    <b-table class="my-2" stacked :items="nationItem.regionalBlocs"></b-table>
                </li>
                <li class="mx-3 my-2  w-100">
                    <span class="fw-bold">Currencies : </span>
                    <b-table class="my-2" stacked :items="nationItem.currencies"></b-table>
                </li>
                <li class="mx-3 my-2  w-100">
                    <span class="fw-bold">Language : </span>
                    <b-table class="my-2" striped :items="nationItem.languages"></b-table>
                </li>
                <li class="mx-3 my-2  w-100">
                    <span class="fw-bold">Translations : </span>
                    <b-table class="my-2" stacked :items="langList"></b-table>
                </li>

            </ul>
          </div>
      </b-modal>
    </div>
</template>

<script>
export default {
  name: 'itemModal',
  props: [
    'nationItem',
    'langList'
  ]
}
</script>
