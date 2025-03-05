import React, { useContext, useEffect, useState } from 'react'
import Title from '../components/Title'
import ProductItem from '../components/ProductItem'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'

const Collection = () => {

  const { products, search, showSearch } = useContext(ShopContext);

  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [showFilter, setShowFilter] = useState(false);
  const [sortType, setSortType] = useState('relavent')

  const toggleCategory = (e) => {

    if (category.includes(e.target.value)) {
      setCategory(prev => prev.filter(a => a !== e.target.value))
    }
    else {
      setCategory(prev => [...prev, e.target.value])
    }
  }

  const toggleSubCategory = (e) => {

    if (subCategory.includes(e.target.value)) {
      setSubCategory(prev => prev.filter(a => a !== e.target.value))
    }
    else {
      setSubCategory(prev => [...prev, e.target.value])
    }

  }

  const applyFilter = () => {

    let productsCopy = products.slice()

    if (showSearch && search) {
      productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    }

    if (category.length > 0) {
      productsCopy = productsCopy.filter(item => category.includes(item.category));
    }

    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory));
    }

    setFilterProducts(productsCopy)

  }

  const sortProduct = async () => {

    let fpCopy = filterProducts.slice();

    switch (sortType) {
      case 'low-high':
        setFilterProducts(fpCopy.sort((a, b) => (a.price - b.price)));
        break;

      case 'high-low':
        setFilterProducts(fpCopy.sort((a, b) => (b.price - a.price)));
        break;

      default:
        applyFilter();
        break;
    }

  }

  useEffect(() => {
    applyFilter()
  }, [category, subCategory, search, showSearch])

  useEffect(() => {
    sortProduct();
  }, [sortType])


  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>

      {/* Filter Options */}
      <div className='min-w-60'>
        <p onClick={() => setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS<img className={`h-3 sm:hidden ${showFilter ? ' rotate-90' : ''}`} src={assets.dropdown_icon} alt="" /></p>

        {/* Category Filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>GENRES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'><input className='w-3' value={"Pop"} onChange={toggleCategory} type="checkbox" /> Pop </p>
            <p className='flex gap-2'><input className='w-3' value={"Indie"} onChange={toggleCategory} type="checkbox" /> Indie </p>
            <p className='flex gap-2'><input className='w-3' value={"Pop-punk"} onChange={toggleCategory} type="checkbox" /> Pop-punk </p>
            <p className='flex gap-2'><input className='w-3' value={"Rock"} onChange={toggleCategory} type="checkbox" /> Rock </p>
            <p className='flex gap-2'><input className='w-3' value={"Rap"} onChange={toggleCategory} type="checkbox" /> Rap </p>
            <p className='flex gap-2'><input className='w-3' value={"Country"} onChange={toggleCategory} type="checkbox" /> Country </p>
            <p className='flex gap-2'><input className='w-3' value={"R&B"} onChange={toggleCategory} type="checkbox" /> R&B </p>
          </div>
        </div>

        {/* Sub Category Filter */}
        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>ARTISTS</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'><input className='w-3' value={"Arctic Monkeys"} onChange={toggleSubCategory} type="checkbox" /> Arctic Monkeys </p>
            <p className='flex gap-2'><input className='w-3' value={"Ariana Grande"} onChange={toggleSubCategory} type="checkbox" /> Ariana Grande </p>
            <p className='flex gap-2'><input className='w-3' value={"Beyonce"} onChange={toggleSubCategory} type="checkbox" /> Beyonce </p>
            <p className='flex gap-2'><input className='w-3' value={"Billie Eilish"} onChange={toggleSubCategory} type="checkbox" /> Billie Eilish </p>
            <p className='flex gap-2'><input className='w-3' value={"Boygenius"} onChange={toggleSubCategory} type="checkbox" /> Boygenius </p>
            <p className='flex gap-2'><input className='w-3' value={"Doechii"} onChange={toggleSubCategory} type="checkbox" /> Doechii </p>
            <p className='flex gap-2'><input className='w-3' value={"Kendrick Lamar"} onChange={toggleSubCategory} type="checkbox" /> Kendrick Lamar </p>
            <p className='flex gap-2'><input className='w-3' value={"Lorde"} onChange={toggleSubCategory} type="checkbox" /> Lorde </p>
            <p className='flex gap-2'><input className='w-3' value={"Noah Kahan"} onChange={toggleSubCategory} type="checkbox" /> Noah Kahan </p>
            <p className='flex gap-2'><input className='w-3' value={"Olivia Rodrigo"} onChange={toggleSubCategory} type="checkbox" /> Olivia Rodrigo </p>
            <p className='flex gap-2'><input className='w-3' value={"Phoebe Bridgers"} onChange={toggleSubCategory} type="checkbox" /> Phoebe Bridgers </p>
            <p className='flex gap-2'><input className='w-3' value={"Rihanna"} onChange={toggleSubCategory} type="checkbox" /> Rihanna </p>
            <p className='flex gap-2'><input className='w-3' value={"SZA"} onChange={toggleSubCategory} type="checkbox" /> SZA </p>
            <p className='flex gap-2'><input className='w-3' value={"Taylor Swift"} onChange={toggleSubCategory} type="checkbox" /> Taylor Swift </p>
          </div>

        </div>
      </div>

      {/* Right Side */}
      <div className='flex-1'>

        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1={"ALL"} text2={"VINYLS"} />

          {/* Product Sort */}
          <select onChange={(e) => setSortType(e.target.value)} className='border-2 border-gray-300 text-sm px-2' name="" id="">
            <option value="relavent">Sort by: Relavent</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>

        {/* Map Products */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
          {
            filterProducts.map((item, index) => (
              <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Collection
