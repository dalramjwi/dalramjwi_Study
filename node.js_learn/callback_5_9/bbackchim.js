//예외 처리
function workd(string) {
  try {
    if (typeof string === "string") {
      console.log(string);
    }
  } catch (error) {
    console.error("내가 원하는게 아니야");
  }
}

workd("he");
workd(1);
workd(true);
workd({ name: "공욱재" });
