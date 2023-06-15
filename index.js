$(function () {});
function sumSalaries(salaries) {
  let sum = 0;
  for (let salary of Object.values(salaries)) {
    sum += Number(salary);
  }
  return sum;
}
////////////////////////////////////////////////////////////
// 민수 성적
$("button[name=soo_puls]").click(() => {
  const d = $("input:eq(3)").val();
  const f = $("input:eq(4)").val();
  const g = $("input:eq(5)").val();
  const minSoo = {
    math: d,
    english: f,
    korean: g,
  };
  let x = sumSalaries(minSoo);
  $(".minSoo").find("div:eq(0)").html(x);
  let xX = x / 3;
  $(".minSoo").find("div:eq(1)").html(xX);
});
//////////////////////////////////////////////////////////////
//영심이 성적
$("button[name=sim_puls]").click(() => {
  const h = $("input:eq(6)").val();
  const i = $("input:eq(7)").val();
  const j = $("input:eq(8)").val();
  const youngSimLee = {
    math: h,
    english: i,
    korean: j,
  };
  let y = sumSalaries(youngSimLee);
  $(".youngSimLee").find("div:eq(0)").html(y);
  let yY = y / 3;
  $(".youngSimLee").find("div:eq(1)").html(yY);
});

///////////////////////////////////////////////////////////////
// 영희 성적
$("button[name=hee_puls]").click(() => {
  const a = $("input:eq(0)").val();
  const b = $("input:eq(1)").val();
  const c = $("input:eq(2)").val();
  const youngHee = {
    math: a,
    english: b,
    korean: c,
  };
  let z = sumSalaries(youngHee);
  $(".youngHee").find("div:eq(0)").html(z);
  let zZ = z / 3;
  $(".youngHee").find("div:eq(1)").html(zZ);
});
////////////////////////////////////////////////////////////////////////
$("button[name=reset1]").click(() => {
  $(".youngHee").find("input").val("");
  $(".youngHee").find("div[name=합], div[name=평균]").html("");

});
$("button[name=reset2]").click(() => {
  $(".minSoo").find("input").val("");
  $(".minSoo").find("div[name=합], div[name=평균]").html("");
});
$("button[name=reset3]").click(() => {
  $(".youngSimLee").find("input").val("");
  $(".youngSimLee").find("div[name=합], div[name=평균]").html("");

});
