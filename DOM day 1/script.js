*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html,
body {
  width: 100vw;
  height: 100vh;
}

.container {
  height: auto;
  padding: 2% 10%;
}

.box {
  position: relative;
  box-sizing: border-box;
  min-height: 1rem;
  margin: 2px;
  background: #4788c9;
  border-radius: 2px;
  overflow: hidden;
  text-align: center;
  color: #fff;
  padding: 20px 0;
  border: 2px dashed black;
}

.row {
  display: flex;
  width: 100%;
  flex-flow: row;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  box-sizing: border-box;
}

.col-12 {
  flex-basis: 100%;
  max-width: 100%;
}

.col-6 {
  flex-basis: 50%;
  max-width: 50%;
}

.col-4 {
  flex-basis: 33%;
  max-width: 33%;
}

.col-4 {
  flex-basis: 33%;
  max-width: 33%;
}

.col-1 {
  flex-basis: 8.33%;
  max-width: 8.33%;
}