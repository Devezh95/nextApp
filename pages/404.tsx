import MainLayout from "../components/MainLayout";
import Link from "next/link";
import classes from '../styles.css/error.module.scss'

export default function ErrorPage() {
  return (
    <MainLayout>
      <h1 className={classes.error}>Error 404</h1>
      <p>
        Please <Link href={"/"}>go back</Link> to safety{" "}
      </p>
    </MainLayout>
  );
}
