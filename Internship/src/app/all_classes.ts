export class all_classes{
    title: string;
    url: string;
    brand: string;
    main_image: string;
    sku: string;
    description: string;
    gtin13: string;
    price: string;
    sub_category_1: string;
    sub_category_2: string;
    sub_category_3: string;
    images: string;
    raw_specifications: string;
    specifications: string;
    highlights: string;
    raw_highlights: string;
    uniq_id: string

    constructor(title: string,
        url: string,
        brand: string,
        main_image: string,
        sku: string,
        description: string,
        gtin13: string,
        price: string,
        sub_category_1: string,
        sub_category_2: string,
        sub_category_3: string,
        images: string,
        raw_specifications: string,
        specifications: string,
        highlights: string,
        raw_highlights: string,
        uniq_id: string) {
        this.title = title;
        this.url = url;
        this.brand = brand;
        this.main_image = main_image;
        this.sku = sku;
        this.description = description;
        this.gtin13 = gtin13;
        this.price = price;
        this.sub_category_1 = sub_category_1;
        this.sub_category_2 = sub_category_2;
        this.sub_category_3 = sub_category_3;
        this.images = images;
        this.raw_specifications = raw_specifications;
        this.specifications = specifications;
        this.highlights = highlights;
        this.raw_highlights = raw_highlights;
        this.uniq_id = uniq_id;
        }
}