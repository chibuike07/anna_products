import { notFound } from "next/navigation";
import { use } from "react";
import Image from "next/image";
import { formatter } from "@/lib/utils/dummyData";
import { getProducts, getCategories } from "@/lib/utils/googleSheets";
import QuantityActions from "@/components/ProductDetail/QuantityActions";
import {
  getAbsoluteImageUrl,
  getProductDetailUrl,
  getPublicAssetPath,
  APP_URL,
} from "@/lib/utils/config";
import type { IProductDetailPageProps } from "./ProductDetailPage.interface";
import { PageWrapper, ProductContainer } from "./ProductDetailPage.styles";

import { useEffect, useState } from "react";

const ProductDetailPage = ({ params }: IProductDetailPageProps) => {
  const resolvedParams = use(params);
  const [product, setProduct] = useState<any>(null);
  const [categoryTitle, setCategoryTitle] = useState<string>("Products");

  useEffect(() => {
    (async () => {
      const products = await getProducts();
      const categories = await getCategories();
      const foundProduct = products.find(
        (p: any) => p.id === resolvedParams.id,
      );
      setProduct(foundProduct);
      if (foundProduct) {
        const foundCategory = categories.find(
          (c: any) => c.id === foundProduct.category,
        );
        setCategoryTitle(foundCategory?.title || "Products");
      }
    })();
  }, [resolvedParams.id]);

  if (!product) {
    notFound();
  }

  const productImageUrl = getAbsoluteImageUrl(product.image);
  const productImageSrc = getPublicAssetPath(product.image);
  const productPageUrl = getProductDetailUrl(product.id);

  return (
    <PageWrapper>
      <ProductContainer>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              name: product.name,
              description: product.description,
              image: productImageUrl,
              price: product.price,
              priceCurrency: "NGN",
              brand: {
                "@type": "Brand",
                name: "Ann's SoleCraft Studio",
              },
              offers: {
                "@type": "Offer",
                price: product.price,
                priceCurrency: "NGN",
                availability: "https://schema.org/InStock",
                url: productPageUrl,
              },
            }),
          }}
        />

        <div className="product_header">
          <Image
            src={productImageSrc}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 100vw, 600px"
            className="product_image"
            priority
            unoptimized
            style={{ objectFit: "cover" }}
          />
        </div>

        <div className="product_details">
          <h1>{product.name}</h1>

          <div className="product_meta">
            {product.badge && <span className="badge">{product.badge}</span>}
            {product.promoCode && (
              <span className="promo">{product.promoCode}</span>
            )}
          </div>

          <p className="description">{product.description}</p>

          <div className="price_section">
            <div className="price">{formatter.format(product.price)}</div>
            {product.promoPercent && (
              <div className="discount">{product.promoPercent}% off</div>
            )}
          </div>

          <div className="action_buttons">
            <QuantityActions product={product} categoryTitle={categoryTitle} />
            <a href={`${APP_URL}#categories`} className="btn secondary">
              ← Back to Shop
            </a>
          </div>

          <a href={`${APP_URL}#categories`} className="back_link">
            ← Back to all products
          </a>
        </div>
      </ProductContainer>
    </PageWrapper>
  );
};

export default ProductDetailPage;
