import BaseLayout from "@/components/BaseLayout";
import CreateProductForm from "./CreateProductForm";

// TODO: make page only accessable to admin
const Page = () => {
  return (
    <BaseLayout>
      <CreateProductForm />
    </BaseLayout>
  );
};
export default Page;
