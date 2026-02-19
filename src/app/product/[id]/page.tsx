import type { Metadata } from "next";
import { getProducts } from "@/lib/utils/googleSheets";
import { getOgImageUrl, getProductDetailUrl } from "@/lib/utils/config";
import ProductDetailPage from "@/components/ProductDetailPage/ProductDetailPage";
import type { IProductDetailPageProps } from "@/components/ProductDetailPage/ProductDetailPage.interface";

export const generateStaticParams = async () => {
  const products = await getProducts();
  return products.map((product: any) => ({ id: product.id }));
};

export const generateMetadata = async ({
  params,
}: IProductDetailPageProps): Promise<Metadata> => {
  const resolvedParams = await params;
  const products = await getProducts();
  const product = products.find((p: any) => p.id === resolvedParams.id);
  if (!product) {
    return {
      title: "Product Not Found",
      description: "The product you are looking for does not exist.",
    };
  }

  const ogImageUrl = getOgImageUrl(product.image);
  const productPageUrl = getProductDetailUrl(product.id);

  return {
    title: `${product.name} | Ann's SoleCraft Studio`,
    description: product.description,
    keywords: [product.name, product.badge || "", "curated products"].filter(
      Boolean,
    ),
    openGraph: {
      type: "article",
      url: productPageUrl,
      siteName: "Ann's SoleCraft Studio",
      title: product.name,
      description: product.description,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: product.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: product.name,
      description: product.description,
      images: [ogImageUrl],
    },
    alternates: {
      canonical: productPageUrl,
    },
  };
};

const ProductPage = ({ params }: IProductDetailPageProps) => {
  return <ProductDetailPage params={params} />;
};

export default ProductPage;
