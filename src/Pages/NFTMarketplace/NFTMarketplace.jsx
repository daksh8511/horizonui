import React from 'react'
import styled from 'styled-components';
import Title from '../../Components/Title';

import banner from '/assets/nft_market/banner.png'
import TrendingNft from '../../Components/TrendingNft/TrendingNft';
import RecentAdded from '../../Components/RecentAdded/RecentAdded';
import TopCreator from '../../Components/TopCreator/TopCreator';
import History from '../../Components/History/History';

const NFTMarketplace = () => {
  return (
    <Wrapper>
      <div>
        <span>Home / NFT Marketplace</span>
        <Title mytitle="NFT Marketplace" />
      </div>
      <div className='gap-3 min-md:flex'>
        <div className='left-banner w-5/5 min-md:w-3/5'>
          <div className="banner text-white p-4 min-lg:pt-8">
            <h2 className='text-2xl min-md:text-3xl font-bold min-md:w-85'>Discover, collect, and sell extraordinary NFTs</h2>
            <h4 className='min-md:w-90 my-3 text-[#E3DAFF]'>Enter in this creative world. Discover now the latest NFTs or start creating your own!</h4>
            <div className='flex gap-4'>
              <button className='bg-white text-black p-3 rounded-2xl text-sm font-bold cursor-pointer'>Discover Now</button>
              <button className='p-3 border text-sm font-bold cursor-pointer rounded-2xl'>Watch Video</button>
            </div>
          </div>

          <TrendingNft />
          <RecentAdded />
        </div>
        <div className='w-5/5 min-md:w-2/5 space-y-4'>
          <TopCreator />
          <History />
        </div>
      </div>
    </Wrapper>
  )
}

export default NFTMarketplace

const Wrapper = styled.section`
  background: #f4f7fe;
  padding: 16px;

  .box .mini_box div h5 {
    color: #a3aed0;
  }

  .banner{
    background : url(${banner});
    background-size: cover;
    background-position : center;
    height : 265px;
    width : 100%;
    border-radius : 16px;
  }
`;
