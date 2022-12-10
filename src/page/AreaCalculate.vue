<template>
  <div>
    <div>{{ this.condition }}</div>
    <div class="grid grid-cols-6 gap-4">
      <div>
        <label for="horizontalAxis1">x1</label>
        <input
          class="border border-black"
          v-model="x1"
          id="horizontalAxis1"
          type="text"
        />
      </div>
      <div>
        <label for="verticalAxis1">y1</label>
        <input
          class="border border-black"
          v-model="y1"
          id="verticalAxis1"
          type="text"
        />
      </div>
      <div>
        <label for="horizontalAxis2">x2</label>
        <input
          class="border border-black"
          v-model="x2"
          id="horizontalAxis2"
          type="text"
        />
      </div>
      <div>
        <label for="verticalAxis2">y2</label>
        <input
          class="border border-black"
          v-model="y2"
          id="verticalAxis2"
          type="text"
        />
      </div>
      <div class="mt-8">
        <button class="border border-black px-3 py-1" @click="areaCalculate()">
          Calculate
        </button>
      </div>
      <div></div>
      <div>
        <label for="horizontalAxis3">x3</label>
        <input
          class="border border-black"
          v-model="x3"
          id="horizontalAxis3"
          type="text"
        />
      </div>
      <div>
        <label for="verticalAxis3">y3</label>
        <input
          class="border border-black"
          v-model="y3"
          id="verticalAxis3"
          type="text"
        />
      </div>
      <div>
        <label for="horizontalAxis4">x4</label>
        <input
          class="border border-black"
          v-model="x4"
          id="horizontalAxis4"
          type="text"
        />
      </div>
      <div>
        <label for="verticalAxis4">y4</label>
        <input
          class="border border-black"
          v-model="y4"
          id="verticalAxis4"
          type="text"
        />
      </div>
    </div>
    <div class="text-red-500 text-right px-56 text-xl">
      Diện tích giao nhau:{{ this.area }}
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      condition:
        "-50 <= x1, y1, x2, y2, x3, y3, x4, y4 <= 50, x1 < x2, y1 < y2, x3 < x4, y3 < y4",
      y1: 0,
      x1: 0,
      y2: 0,
      x2: 0,
      y3: 0,
      x3: 0,
      y4: 0,
      x4: 0,
      area: 0,
    };
  },
  mounted() {},

  methods: {
    areaCalculate() {
      this.x1 = Number(this.x1);
      this.x2 = Number(this.x2);
      this.x3 = Number(this.x3);
      this.x4 = Number(this.x4);
      this.y1 = Number(this.y1);
      this.y2 = Number(this.y2);
      this.y3 = Number(this.y3);
      this.y4 = Number(this.y4);
      if (
        -50 <= this.x1 &&
        this.x1 <= 50 &&
        -50 <= this.x2 &&
        this.x2 <= 50 &&
        -50 <= this.x3 &&
        this.x3 <= 50 &&
        -50 <= this.x4 &&
        this.x4 <= 50 &&
        -50 <= this.y1 &&
        this.y1 <= 50 &&
        -50 <= this.y2 &&
        this.y2 <= 50 &&
        -50 <= this.y3 &&
        this.y3 <= 50 &&
        -50 <= this.y4 &&
        this.y4 <= 50 &&
        this.y1 < this.y2 &&
        this.x1 < this.x2 &&
        this.x3 < this.x4 &&
        this.y3 < this.y4
      ) {
        if (
          this.x2 <= this.x3 ||
          this.y2 <= this.y3 ||
          this.x1 >= this.x4 ||
          this.y1 >= this.y4
        ) {
          this.area = 0;
          console.log("this.area", this.area);
          console.log("oko");
        } else if (
          this.x1 <= this.x3 &&
          this.x4 <= this.x2 &&
          this.y1 <= this.y3 &&
          this.y4 <= this.y2
        ) {
          this.area = (this.x4 - this.x3) * (this.y4 - this.y3);
          console.log("this.area", this.area);
          console.log("x4x3y4y3");
        } else if (
          this.x1 <= this.x3 &&
          this.x4 <= this.x2 &&
          this.y1 > this.y3 &&
          this.y4 > this.y2
        ) {
          this.area = (this.x4 - this.x3) * (this.y2 - this.y1);
          console.log("this.area", this.area);
          console.log("x4x3y2y1");
        } else if (
          this.x1 <= this.x3 &&
          this.x4 <= this.x2 &&
          this.y1 < this.y3 &&
          this.y4 > this.y2 &&
          this.y3 < this.y2
        ) {
          this.area = (this.x4 - this.x3) * (this.y2 - this.y3);
          console.log("this.area", this.area);
          console.log("x4x3y3y2");
        } else if (
          this.x1 <= this.x3 &&
          this.x4 <= this.x2 &&
          this.y1 > this.y3 &&
          this.y4 < this.y2 &&
          this.y1 < this.y4
        ) {
          this.area = (this.x4 - this.x3) * (this.y4 - this.y1);
          console.log("this.area", this.area);
          console.log("x4x3y4y1");
        } else if (
          this.x1 >= this.x3 &&
          this.x4 >= this.x2 &&
          this.y1 <= this.y3 &&
          this.y4 <= this.y2
        ) {
          this.area = (this.x2 - this.x1) * (this.y4 - this.y3);
          console.log("this.area", this.area);
          console.log("x2x1y4y3");
        } else if (
          this.x1 >= this.x3 &&
          this.x4 >= this.x2 &&
          this.y1 > this.y3 &&
          this.y4 > this.y2
        ) {
          this.area = (this.x2 - this.x1) * (this.y2 - this.y1);
          console.log("this.area", this.area);
          console.log("x2x1y2y1");
        } else if (
          this.x1 >= this.x3 &&
          this.x4 >= this.x2 &&
          this.y1 < this.y3 &&
          this.y4 > this.y2 &&
          this.y3 < this.y2
        ) {
          this.area = (this.x2 - this.x1) * (this.y2 - this.y3);
          console.log("this.area", this.area);
          console.log("x2x1y2y3");
        } else if (
          this.x1 >= this.x3 &&
          this.x4 >= this.x2 &&
          this.y1 > this.y3 &&
          this.y4 < this.y2 &&
          this.y1 < this.y4
        ) {
          this.area = (this.x2 - this.x1) * (this.y4 - this.y1);
          console.log("this.area", this.area);
          console.log("x2x1y4y1");
        } else if (
          this.x1 <= this.x3 &&
          this.x4 >= this.x2 &&
          this.x3 < this.x2 &&
          this.y1 <= this.y3 &&
          this.y4 <= this.y2
        ) {
          this.area = (this.x2 - this.x3) * (this.y4 - this.y3);
          console.log("this.area", this.area);
          console.log("x2x3y4y3");
        } else if (
          this.x1 <= this.x3 &&
          this.x4 >= this.x2 &&
          this.x3 < this.x2 &&
          this.y1 > this.y3 &&
          this.y4 > this.y2
        ) {
          this.area = (this.x2 - this.x3) * (this.y2 - this.y1);
          console.log("this.area", this.area);
          console.log("x2x3y2y1");
        } else if (
          this.x1 <= this.x3 &&
          this.x4 >= this.x2 &&
          this.x3 < this.x2 &&
          this.y1 < this.y3 &&
          this.y4 > this.y2 &&
          this.y3 < this.y2
        ) {
          this.area = (this.x2 - this.x3) * (this.y2 - this.y3);
          console.log("this.area", this.area);
          console.log("x2x3y2y3");
        } else if (
          this.x1 <= this.x3 &&
          this.x4 >= this.x2 &&
          this.x3 < this.x2 &&
          this.y1 > this.y3 &&
          this.y4 < this.y2 &&
          this.y1 < this.y4
        ) {
          this.area = (this.x2 - this.x3) * (this.y4 - this.y1);
          console.log("this.area", this.area);
          console.log("x2x3y4y1");
        } else if (
          this.x1 >= this.x3 &&
          this.x4 <= this.x2 &&
          this.x1 < this.x4 &&
          this.y1 <= this.y3 &&
          this.y4 <= this.y2
        ) {
          this.area = (this.x4 - this.x1) * (this.y4 - this.y3);
          console.log("this.area", this.area);
          console.log("x4x1y4y3");
        } else if (
          this.x1 >= this.x3 &&
          this.x4 <= this.x2 &&
          this.x1 < this.x4 &&
          this.y1 > this.y3 &&
          this.y4 > this.y2
        ) {
          this.area = (this.x4 - this.x1) * (this.y2 - this.y1);
          console.log("this.area", this.area);
          console.log("x4x1y2y1");
        } else if (
          this.x1 >= this.x3 &&
          this.x4 <= this.x2 &&
          this.x1 < this.x4 &&
          this.y1 < this.y3 &&
          this.y4 > this.y2 &&
          this.y3 < this.y2
        ) {
          this.area = (this.x4 - this.x1) * (this.y2 - this.y3);
          console.log("this.area", this.area);
          console.log("x4x1y2y3");
        } else if (
          this.x1 >= this.x3 &&
          this.x4 <= this.x2 &&
          this.x1 < this.x4 &&
          this.y1 > this.y3 &&
          this.y4 < this.y2 &&
          this.y1 < this.y4
        ) {
          this.area = (this.x4 - this.x1) * (this.y4 - this.y1);
          console.log("this.area", this.area);
          console.log("x4x1y4y1");
        }
      } else {
        console.log("ko hop le");
      }
    },
  },
};
</script>

<style scoped src="../assets/css/pageAdmin.css"></style>
