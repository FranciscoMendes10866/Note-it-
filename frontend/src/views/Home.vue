<template>
  <div class="home">
    <!-- Hero Landing -->
    <vs-row vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
      <vs-col vs-lg="6" vs-sm="12" vs-xs="12">
        <h1 id="marginT">Note Workspace</h1>
        <p id="marginP">Write, plan and get organized.</p>
        <p id="marginP">
          <strong>Note it!</strong> is all you need!
        </p>
        <vs-button
          id="marginB"
          color="#3dd495"
          gradient-color-secondary="rgb(130, 207, 23)"
          type="gradient"
          to="/register"
        >
          Get Started - it's
          <strong>Free!</strong>
        </vs-button>
      </vs-col>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-lg="6" vs-sm="12" vs-xs="12">
        <img id="width" src="@/assets/static/5e536822eba2592eaf41e696_slider-4.svg" alt />
      </vs-col>
    </vs-row>
    <!-- Tasks and Projects -->
    <vs-row vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
      <vs-col vs-w="12">
        <h1 id="marginTP">Tasks & Projects</h1>
        <p id="marginPTP">Lightweight and flexible solution.</p>
      </vs-col>
    </vs-row>
    <vs-row vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
      <vs-col vs-w="12">
        <img id="width" src="@/assets/static/5e53696e33d36873203e829f_slider-3.svg" alt />
      </vs-col>
    </vs-row>
    <!-- Bring clarity -->
    <vs-row vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
      <vs-col vs-w="12">
        <h1 id="marginTP">Boost personal productivity</h1>
        <p id="marginPTP">With one tool, to can see the whole picture.</p>
      </vs-col>
    </vs-row>
    <vs-row vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
      <vs-col vs-w="12">
        <img id="width" src="@/assets/static/5e53699f33d3683a073e83a2_slider-2.svg" alt />
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Home',
}
</script>


<style>
#width {
  margin-top: 70px;
  max-width: 500px;
}
#marginT {
  margin-top: 70px;
  font-size: 70px;
  font-weight: 700;
}
#marginP {
  margin-top: 15px;
  font-size: 30px;
  font-weight: 400;
}
#marginB {
  margin-top: 40px;
  font-size: 20px;
  font-weight: 600;
}
#marginTP {
  margin-top: 150px;
  font-size: 40px;
  font-weight: 700;
}
#marginPTP {
  margin-top: 15px;
  font-size: 22px;
  font-weight: 400;
}
</style>
