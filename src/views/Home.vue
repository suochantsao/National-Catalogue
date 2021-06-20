<template>
  <div class="homePage">

    <header class="container mt-5 mb-4">
      <h1><a href="#">National Catalogue</a></h1>
    </header>

    <nav class="bgStyle py-4">
      <form class="container d-flex">
        <input class="form-control me-4" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-light px-5" type="submit">Search</button>
      </form>
    </nav>

    <!-- Sort Button -->
    <div class="container my-3 text-end">
      <span class="me-2">Sort by : </span>
      <button type="button" class="btn btn-outline-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
        A to Z
      </button>
      <ul class="dropdown-menu dropdown-menu-end">
        <li><a class="dropdown-item" href="#">A to Z</a></li>
        <li><a class="dropdown-item" href="#">Z to A</a></li>
      </ul>
    </div>

    <!-- Nation List -->
    <list-item
      :nationItem = "item"
      :key = "item.nativeName"
      v-for="item in nationList"
      @nationDetail="nationInfo = $event"
      @nationLangList="nationLang = $event"
    ></list-item>

    <!-- Modal -->
    <item-modal
      :nationItem = "nationInfo"
      :langList = "nationLang"
    ></item-modal>

    <!-- Back to top Button -->
    <div class="container text-end fw-bold pt-3">
      <fa-icon icon="arrow-up" class="icon" />
      <a href="#"> Back to top</a>
    </div>

    <!-- Pagination -->
    <ul class="pagination justify-content-center mt-3 mb-5">
      <li class="page-item">
        <a class="page-link" href="#" aria-label="Previous">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li class="page-item"><a class="page-link" href="#">1</a></li>
      <li class="page-item"><a class="page-link" href="#">2</a></li>
      <li class="page-item"><a class="page-link" href="#">3</a></li>
      <li class="page-item">
        <a class="page-link" href="#" aria-label="Next">
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>

  </div>
</template>

<script>
// Components
import listItem from '@/components/listItem.vue'
import itemModal from '@/components/itemModal.vue'

export default {
  name: 'Home',
  components: {
    listItem,
    itemModal
  },
  data () {
    return {
      nationList: null,
      nationLang: '',
      nationInfo: ''
    }
  },
  created () {
    const nationAPI = 'https://restcountries.eu/rest/v2/all'

    this.$http
      .get(nationAPI)
      .then(res => {
        this.nationList = res.data.slice(0, 25)
      })
  }
}
</script>
