<script setup lang="ts">
import { computed, onMounted, reactive, ref } from "vue";
const props = defineProps({
  time: {
    type: Date,
    required: false,
    default: () => new Date(),
  },
  clockWidth:{
    type: Number,
    required: false,
  }
});

const dateInfo: ClockInfo = {
  year: props.time.getFullYear(),
  month: props.time.getMonth() + 1,
  day: props.time.getDate(),
  hour: props.time.getHours(),
  minute: props.time.getMinutes(),
  sec: props.time.getSeconds(),
};
const hourRotateArr: Array<number> = [],
  minuteRotateArr: Array<number> = [],
  secRotateArr: Array<number> = [],
  hourStrArr: Array<ClockHourObj> = [];
for (let i = 1; i <= 24; i++) {
  // rotateArr.push(360/24*(i-1)*-1);
  hourStrArr.push({
    id: "hourStr" + i,
    index: i,
    value: changeZHCN(i - 1) + "时",
  });
}
const $clock = ref<HTMLElement | null>(null);

onMounted(async () => {
  await setHour();
  await setMinute();
  await setSec();
  await initRotate();
  await start();
});
/*设置小时 */
function setHour() {
  let str = "";
  for (let i = 1; i <= 24; i++) {
    hourRotateArr.push((360 / 24) * (i - 1) * -1);
    str += "<div><div>" + changeZHCN(i - 1) + "时</div></div>";
  }
  const li = document.createElement("li");
  li.classList.add("cl-clock-hour");
  li.classList.add("on-hour");
  li.innerHTML = str;
  ($clock.value as HTMLElement).appendChild(li);
  return new Promise<void>((resolve, rejects) => {
    setTimeout(() => {
      const hourElements = document.querySelectorAll(".on-hour>div");
      hourElements.forEach((item, index) => {
        (
          item as HTMLElement
        ).style.transform = `rotate(${hourRotateArr[index]}deg)`;
      });
      resolve();
      // setTimeout(() => {
      // setMinute();
      // }, 300);
    }, 100);
  });
}
/* 设置分钟 */
function setMinute() {
  let str = "";
  for (let i = 1; i <= 60; i++) {
    minuteRotateArr.push((360 / 60) * (i - 1) * -1);
    str += "<div><div>" + changeZHCN(i - 1) + "分</div></div>";
  }
  const li = document.createElement("li");
  li.classList.add("cl-clock-hour");
  li.classList.add("cl-clock-minute");
  li.classList.add("on-minute");
  li.innerHTML = str;
  ($clock.value as HTMLElement).appendChild(li);
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      const minuteElements = document.querySelectorAll(".on-minute>div");
      minuteElements.forEach((item, index) => {
        (
          item as HTMLElement
        ).style.transform = `rotate(${minuteRotateArr[index]}deg)`;
      });
      resolve();
      // setTimeout(() => {
      //   setSec();
      // }, 300);
    }, 300);
  });
}

/* 设置秒 */
function setSec() {
  let str = "";
  for (let i = 1; i <= 60; i++) {
    secRotateArr.push((360 / 60) * (i - 1) * -1);
    str += "<div><div>" + changeZHCN(i - 1) + "秒</div></div>";
  }
  const li = document.createElement("li");
  li.classList.add("cl-clock-hour");
  li.classList.add("cl-clock-sec");
  li.classList.add("on-sec");
  li.innerHTML = str;
  ($clock.value as HTMLElement).appendChild(li);
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      const secElements = document.querySelectorAll(".on-sec>div");
      secElements.forEach((item, index) => {
        (
          item as HTMLElement
        ).style.transform = `rotate(${secRotateArr[index]}deg)`;
      });
      resolve();
      // setTimeout(() => {
      //     const hrEl = document.querySelectorAll(".cl-clock>hr");
      //     (hrEl[0] as HTMLElement).classList.add("active");
      //   initRotate();
      // }, 1300);
    }, 300);
  });
}
/**
 * 将数字转为简体中文
 * @param value 要转换的值
 */
function changeZHCN(value: number) {
  const ZHCNArr = [
    "零",
    "一",
    "二",
    "三",
    "四",
    "五",
    "六",
    "七",
    "八",
    "九",
    "十",
  ];
  /* 小于 10 */
  if (value < 10) {
    return ZHCNArr[value];
  }

  let val = value.toString(),
    str = "";
  /* 整十 */
  if (val.charAt(1) == "0") {
    // 第一位不是1 取对应的数值
    if (val.charAt(0) != "1") {
      str = ZHCNArr[parseInt(val.charAt(0), 10)];
    }
    str += ZHCNArr[10];
    return str;
  }

  /* 小于 20 */
  if (value < 20) {
    str = ZHCNArr[10] + ZHCNArr[parseInt(val.charAt(1), 10)];
    return str;
  }

  str =
    ZHCNArr[parseInt(val.charAt(0), 10)] +
    ZHCNArr[10] +
    ZHCNArr[parseInt(val.charAt(1), 10)];
  return str;
}
const clockWidthStr = computed(()=> {
  if(props.clockWidth){
      return `${props.clockWidth}px`
  }else{
    return '100%';
  }
})
const yearStr = computed(() => {
  let y = dateInfo.year.toString(),
    str = "";
  for (let i = 0; i < y.length; i++) {
    str += changeZHCN(parseInt(y.charAt(i), 10));
  }
  return str;
});
const monthStr = computed(() => {
  return changeZHCN(dateInfo.month);
});
const dayStr = computed(() => {
  return changeZHCN(dateInfo.day);
});
/**
 * 初始化时钟的滚动位置
 */
function initRotate() {
  const rotateInfo = {
    h: (360 / 24) * dateInfo.hour,
    m: (360 / 60) * dateInfo.minute,
    s: (360 / 60) * dateInfo.sec,
  };
  const hourEl = document.querySelectorAll(".on-hour");
  const minuteEl = document.querySelectorAll(".on-minute");
  const secEl = document.querySelectorAll(".on-sec");
  const hrEl = document.querySelectorAll(".cl-clock>hr");
  //   console.log(rotateInfo,'旋转参数', 'dom', hourEl, minuteEl, secEl)
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      (hourEl[0] as HTMLElement).style.transform = `rotate(${rotateInfo.h}deg)`;

      (
        minuteEl[0] as HTMLElement
      ).style.transform = `rotate(${rotateInfo.m}deg)`;

      (secEl[0] as HTMLElement).style.transform = `rotate(${rotateInfo.s}deg)`;

      (hrEl[0] as HTMLElement).classList.add("active");
      resolve();
    }, 1300);
  });
}

/* 启动 */
function start() {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      if (dateInfo.sec <= 60) {
        dateInfo.sec++;
        const secEl = document.querySelectorAll(".on-sec");
        const r = (360 / 60) * (dateInfo.sec - 1);
        (secEl[0] as HTMLElement).style.transform = `rotate(${r}deg)`;
        minuteAdd();
        start();
        resolve();
      } else {
        resolve();
        console.log(dateInfo.sec, "时间出错");
      }
    }, 1000);
  });
}
/* 分钟数增加 */
function minuteAdd() {
  if (dateInfo.sec == 60 + 1) {
    setTimeout(() => {
      const secEl = document.querySelectorAll(".on-sec");
      (secEl[0] as HTMLElement).style.transitionDuration = `0s`;
      (secEl[0] as HTMLElement).style.transform = `rotate(0deg)`;

      dateInfo.sec = 1;
      setTimeout(() => {
        (secEl[0] as HTMLElement).style.transform = `rotate(0deg)`;
        (secEl[0] as HTMLElement).style.transitionDuration = `.3s`;
      }, 100);
      dateInfo.minute++;
      let r = (360 / 60) * (dateInfo.minute - 1);
      const minuteEl = document.querySelectorAll(".on-minute");
      (minuteEl[0] as HTMLElement).style.transform = `rotate(${r}deg)`;
      hourAdd();
    }, 300);
  }
}

// /* 小时数增加 */
function hourAdd() {
  if (dateInfo.minute == 60 + 1) {
    setTimeout(() => {
      const minuteEl = document.querySelectorAll(".on-minute");
      (minuteEl[0] as HTMLElement).style.transform = `rotate(0deg)`;
      (minuteEl[0] as HTMLElement).style.transitionDuration = `0s`;
      dateInfo.minute = 1;
      setTimeout(() => {
        (minuteEl[0] as HTMLElement).style.transform = `rotate(0deg)`;
        (minuteEl[0] as HTMLElement).style.transitionDuration = `.3s`;
      }, 100);
      dateInfo.hour++;
      let r = (360 / 24) * (dateInfo.hour - 1);
      const hourEl = document.querySelectorAll(".on-hour");
      (hourEl[0] as HTMLElement).style.transform = `rotate(${r}deg)`;
      dayAdd();
    }, 300);
  }
}

/* 天数增加 */
function dayAdd() {
  if (dateInfo.hour == 24 + 1) {
    setTimeout(() => {
      const hourEl = document.querySelectorAll(".on-hour");
      (hourEl[0] as HTMLElement).style.transform = `rotate(0deg)`;
      (hourEl[0] as HTMLElement).style.transitionDuration = `0s`;
      dateInfo.hour = 1;
      setTimeout(() => {
        (hourEl[0] as HTMLElement).style.transform = `rotate(0deg)`;
        (hourEl[0] as HTMLElement).style.transitionDuration = `.3s`;
      }, 100);

      let nowDate = new Date();
      dateInfo.year = nowDate.getFullYear();
      dateInfo.month = nowDate.getMonth() + 1;
      dateInfo.day = nowDate.getDate();
    }, 300);
  }
}
</script>

<template>
  <ul class="cl-clock" ref="$clock" :style="{width:clockWidthStr, height: clockWidthStr}">
    <hr />
    <li class="cl-clock-bg"></li>
    <li class="cl-clock-date">{{ yearStr }}年{{ monthStr }}月{{ dayStr }}日</li>
  </ul>
</template>

<script lang="ts">
export default {
  name: "cl-clock",
};
</script>
