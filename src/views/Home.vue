<template>
  <div class="homePage">

    <header class="container mt-5 mb-4">
      <h1 @click="reload"><a href="#">National Catalogue</a></h1>
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
        {{sortBtn}}
      </button>
      <ul class="dropdown-menu dropdown-menu-end">
        <li @click="reverseList(false)"><a class="dropdown-item" href="#">A to Z</a></li>
        <li @click="reverseList(true)"><a class="dropdown-item" href="#">Z to A</a></li>
      </ul>
    </div>

    <!-- Nation List -->
    <list-item
      :nationItem = "item"
      v-for="item in nationList"
      :key = "item.nativeName"
      @nationDetail="nationInfo = $event"
      @nationLangList="nationLang = $event"
      id="nation-list"
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
    <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        last-number
        class="justify-content-center mt-3 mb-5"
        @click.native="scrollToTop()"
    ></b-pagination>

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
  methods: {
    scrollToTop () {
      window.scrollTo(0, 0)
    },
    reload () {
      window.location.reload()
    },
    reverseList (bol) {
      if (bol === true && bol !== this.sortStatus) {
        this.listAry.reverse()
        this.sortStatus = true
        this.sortBtn = 'Z to A'
        this.currentPage = 1
      } else if (bol === false & bol !== this.sortStatus) {
        this.listAry.reverse()
        this.sortStatus = false
        this.sortBtn = 'A to Z'
        this.currentPage = 1
      }
    }
  },
  data () {
    return {
      listAry: [],
      nationLang: '',
      nationInfo: '',
      rows: '',
      perPage: 25,
      currentPage: 1,
      sortBtn: 'A to Z',
      sortStatus: false
    }
  },
  created () {
    const nationAPI = 'https://restcountries.eu/rest/v2/all'

    this.$http
      .get(nationAPI)
      .then(res => {
        this.listAry = res.data
        this.rows = res.data.length
      })
  },
  computed: {
    nationList () {
      const items = this.listAry
      return items.slice(
        (this.currentPage - 1) * this.perPage,
        this.currentPage * this.perPage
      )
    }
  }
}
</script>
