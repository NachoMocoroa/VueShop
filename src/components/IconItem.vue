<template>
  <div>
    <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="svgStyle">

      <template v-if="iconType === 'userIcon'">
        <image id="image0" width="24" height="24" x="0" y="0" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYEAQAAAAa7ikwAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAAAEgAAABIAEbJaz4AAAAHdElNRQfiCxQTKxU6PuVbAAACkklEQVRIx7XUX2jVZRgH8M+Zc+dAJhMycUFGTmplm5IkB1KHpV0UJLZxtBu9kIGSiE1kCA4McoYggn9QtplzOiGCTbyJAkvxz+aCClxelIxZkZs2YpsgeLbjxZko+nvPWYkPPDfv8/3zvO/z/H485YhNDFb4HFPukvgdGe68zEgR6cG8zByl67z+C8tGSK7mpRqevZA1GK6i9yCdR/guTs9S0rMnequtlM+haSb9/5LZSyYTyD30X6fxKm/czHJzX+hr1pyj94ccooHsbWPNlxS2hsTr2RJn+NB/F7+fww3UNlP4SYTB2r8Y3hdNHOrjdAn1tdTXcbqMoYGAyVbWdjwiXtFDb6Dzvteo3kZ83QN8fAPVh+lLBp7rcyrOjYMnv0tToJuRFKmfwzNLDTFSE81tamFyKZKXuNEWDer4m8T+sEHiGKeKo7k3NpOsx64xMhejQRvL8m/1xtWBoX/Prm/Q9U40IJ1kxQQMViwlvSRao2taAaXbo4mx8ySS+Q0Siyk4H10r/QKjz4f3uqE9v0HDrTA/PYbR98OAKyuZlQqLz9rNlZ1h/ug8DF7O/XU2zmXqtsfFpx6i8bPc3MH96D4SXRzr5tZRhv6hvZXKGmYUMOMZKptp7+T2Ym6vDBt0VxVytowFD7fWyW/NtLyY/SWUb6LubTqucbMJcaaf4c83WX+KP37k40o+SjPtkWGfLcaiTxkYf6bRctp6mHMcr46jyijZQqqVHVXseI/UGUq+QkUWMinN8lX89OuD7gcOs2gmik5y7IXs4cn1FF/LvzmhmL+Qq/1ZrZYDFDWMF976kK49zKv9/+L3Y8O39K1iQd1Dh5PmMv8E8ctPblC6m6oPiL3y5FqREdtO7M5TEn887gGL2dnwIhzBAwAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOC0xMS0yMVQwMjo0MzoyMS0wNzowMJ+FaSAAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTgtMTEtMjFUMDI6NDM6MjEtMDc6MDDu2NGcAAAAKHRFWHRzdmc6YmFzZS11cmkAZmlsZTovLy90bXAvbWFnaWNrLWt4SW4xVzJU1RTRywAAAABJRU5ErkJggg==" />
      </template>
      <template v-else>
        <g>
          <path :d="iconPath"></path>
        </g>
      </template>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'IconItem',
  props: {
    iconType: { default: '' }
  },
  data () {
    return {
      iconPath: ''
    }
  },
  mounted() {
    this.filterIcon()
  },
  methods: {
    filterIcon() {
      switch (this.iconType) {
        case 'backArrow':
          this.iconPath = "M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"
          break;
        case 'cartIcon':
          this.iconPath = "M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"
          break;
        default:
          return 'ERROR'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.svgStyle {
  pointer-events: none;
  display: block;
  width: 24px;
  height: 24px;
}
</style>
