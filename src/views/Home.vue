<template>
  <div class="homePage">

    <header class="container mt-5 mb-4">
      <h1 @click="reload"><a href="#">National Catalogue</a></h1>
    </header>

    <nav class="bgStyle py-4">
      <div class="container d-flex">
        <input
          placeholder="Search Nation Name"
          class="form-control me-4"
          v-model="keyWord"
          type="search"
        >
      </div>
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
      v-for="item in searchResult()"
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
        this.sortBtn = 'Z to A'
      } else if (bol === false & bol !== this.sortStatus) {
        this.sortBtn = 'A to Z'
      }
      this.listAry.reverse()
      this.currentPage = 1
      this.sortStatus = !this.sortStatus
    },
    searchResult () {
      if (!this.keyWord) {
        return this.nationList
      }
      return this.search
    }
  },
  data () {
    return {
      listAry: [],
      nationLang: '',
      nationInfo: '',
      keyWord: '',
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
        console.log(this.listAry[0].name)
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
    },
    search () {
      return this.listAry.filter((value) => {
        const key = value.name.toLowerCase()
        return key.includes(this.keyWord.toLowerCase())
      })
    }
  }
}
</script>
