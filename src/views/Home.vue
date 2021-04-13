<template>
  <div class="scroll-container">
    <section>
      <h2>Section 1</h2>
    </section>
    <section>
      <h2>Section 2</h2>
    </section>
    <section>
      <h2>Section 3</h2>
    </section>
    <section>
      <h2>Section 4</h2>
    </section>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {}
}
</script>

<style>
.scroll-container {
  padding-top: 60px;
  height: 100vh;
}

section {
  height: 100vh;
}

/* Other styles */
section {
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 2px;
}
</style>
