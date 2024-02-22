import style from "./index.module.scss";
import { testHttp } from "@/api";
function Home() {
  const httpTest = async () => {
    console.log(await testHttp());
  };
  return (
    <>
      {/* <div className={style.box}>this is Home</div> */}
      <div>this is Home</div>
      <button onClick={httpTest}>测试http封装</button>
    </>
  );
}
export default Home;
