import style from "./index.module.scss";
import { MainLayout } from "@/layouts";
import { testHttp } from "@/api";
import { Button, Badge } from "antd";
import react from "@/assets/react.svg";
import { Icon } from "@iconify-icon/react";
import { useBearStore } from "@/stores";

const Home: React.FC = () => {
  const httpTest = async () => {
    console.log(await testHttp());
  };
  const { bears, increasePopulation, decreasePopulation } = useBearStore();


  return (
    <>
      <div>
        <Button onClick={decreasePopulation}>-</Button>
        <span>testStore {bears}</span>
        <Button onClick={increasePopulation}>+</Button>
      </div>
      <img src={react} alt="" />
      <Icon icon="eva:alert-triangle-fill" flip="horizontal" />
      {/* <div className={style.box}>this is Home</div> */}
      <div className="uno-bg-pink">this is Home type1</div>
      <div uno-bg-pink>this is Home type2</div>
      <div uno-bg="pink">this is Home type3</div>
      <div uno-text="pink">This conflicts with links' `text` prop</div>
      <Button type="primary" danger onClick={httpTest}>
        测试http封装
      </Button>
      <Badge count={1} />
    </>
  );
};
export default Home;
