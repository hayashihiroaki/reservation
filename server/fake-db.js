const Product = require('./model/product')

class FakeDb {
  constructor() {
    this.products = [
      {
        coverImage: './assets/img/photo-1565849904461-04a58ad377e0.jpeg',
        name: 'Phone XL',
        price: 799,
        description: 'A large phone with one of the best screens',
        head1: 'サンプルテキスト１',
        head2: 'サンプルテキスト２',
        head3: 'サンプルテキスト３',
        text1: 'サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト',
        text2: 'テキスト文章 テキスト文章 テキスト文章 テキスト文章 テキスト文章 テキスト文章 テキスト文章 テキスト文章 テキスト文章 テキスト文章 テキスト文章 テキスト文章 テキスト文章 テキスト文章 テキスト文章 テキスト文章 テキスト文章 テキスト文章',
        text3: 'Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.'
      },
      {
        coverImage: './assets/img/photo-1509395062183-67c5ad6faff9.jpeg',
        name: 'Phone Mini',
        price: 699,
        description: 'A great phone with one of the best cameras',
        head1: 'サンプルテキスト１',
        head2: 'サンプルテキスト２',
        head3: 'サンプルテキスト３',
        text1: 'サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト',
        text2: 'テキスト文章 テキスト文章 テキスト文章 テキスト文章 テキスト文章 テキスト文章 テキスト文章 テキスト文章 テキスト文章 テキスト文章 テキスト文章 テキスト文章 テキスト文章 テキスト文章 テキスト文章 テキスト文章 テキスト文章 テキスト文章',
        text3: 'Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.'
      },
      {
        coverImage: './assets/img/photo-1584438784894-089d6a62b8fa.jpeg',
        name: 'Phone Standard',
        price: 299,
        description: '',
        head1: 'サンプルテキスト１',
        head2: 'サンプルテキスト２',
        head3: 'サンプルテキスト３',
        text1: 'サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト',
        text2: 'テキスト文章 テキスト文章 テキスト文章 テキスト文章 テキスト文章 テキスト文章 テキスト文章 テキスト文章 テキスト文章 テキスト文章 テキスト文章 テキスト文章 テキスト文章 テキスト文章 テキスト文章 テキスト文章 テキスト文章 テキスト文章',
        text3: 'Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.'
      },
      {
        coverImage: './assets/img/photo-1543069190-9d380c458bc2.jpeg',
        name: 'Phone Special',
        price: 999,
        description: '',
        head1: 'サンプルテキスト１',
        head2: 'サンプルテキスト２',
        head3: 'サンプルテキスト３',
        text1: 'サンプルテキスト サンプルテキスト サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト',
        text2: 'テキスト文章　テキスト文章　テキスト文章　テキスト文章　テキスト文章　テキスト文章　テキスト文章　テキスト文章　テキスト文章　テキスト文章　テキスト文章　テキスト文章　テキスト文章　テキスト文章　テキスト文章　テキスト文章　テキスト文章　テキスト文章',
        text3: 'Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.'
      }
    ]
  }

  async initDb() {
    await this.cleanDb()
    this.pushProductsToDb()
  }

  async cleanDb() {
    await Product.deleteMany({})
  }

  pushProductsToDb() {
    this.products.forEach(
      (product) => {
        const newProduct = new Product(product)
        newProduct.save()
      }
    )
  }
}

module.exports = FakeDb