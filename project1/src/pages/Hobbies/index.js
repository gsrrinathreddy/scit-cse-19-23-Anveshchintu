import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

export default function Hobbies() {
  return (
    <ImageList sx={{ width: 500, height: 450 }}>
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div">December</ListSubheader>
      </ImageListItem>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://th.bing.com/th/id/OIP.bn6NseX0smnxWnb1XptACgAAAA?pid=ImgDet&rs=1',
    title: 'Watching Cricket',
    
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://cdn9.dissolve.com/p/D2115_184_207/D2115_184_207_1200.jpg',
    title: 'Excercising',
    
  },
  {
    img: 'https://1.bp.blogspot.com/--JTXAGukKjA/Xlg31IBQHXI/AAAAAAAAAFQ/AePjJ6U7PCoZO0IMNb28u4IHsBew-arSwCLcBGAsYHQ/s1600/photographycoverimg.jpg',
    title: 'Photography',
    
  },
  {
    img: 'https://th.bing.com/th/id/OIP.E3QahZNztH3H9mM1s3upwAHaE8?pid=ImgDet&rs=1',
    title: 'Gardening',
    
    cols: 2,
  },
  
  
 
  
  
];