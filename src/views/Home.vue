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
        <li><a class="dropdown-item" href="#">All Result</a></li>
      </ul>
    </div>

    <div class="listItem container p-5 my-4 col-10 d-flex">
      <img class="w-25" src="https://restcountries.eu/data/ala.svg" alt="" srcset="">
      <!-- <h2>National Name</h2> -->
      <ul class="nationInfo d-flex">
        <li><h2> Nation Name <span class="styleGrey">Native Name</span> </h2></li>
        <!-- <li>Native Name</li>
        <li>Native Name</li>
        <li>Native Name</li>
        <li>Native Name</li> -->
      </ul>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home'
}
</script>
