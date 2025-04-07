import img1 from '../assets/placeholder1.jpg';
import img2 from '../assets/placeholder2.jpg';
import img3 from '../assets/placeholder3.jpeg';
import img4 from '../assets/placeholder4.jpg';

import './PictureBoard.css';

import {useState, useEffect, useRef} from 'react';

function PictureBoard()
{
    // const imageArray = [
    //     img1, img2, img3, img4, 
    //     img3,img2, 
    //     img1, img2, img3, img4, 
    //     img3,img2, 

    // ];
    const imageArray = [
        img1, img2, img3, img4, 
        img3,img2, 
        img1, img2, img3, 
    ];
    // const imageArray = [
    //     img1, img2, img3, img4, 
    //     img3,img2, 
    //     img1, img2, img3, img4, 
    //     img3,img2, 
    //     img1, img2, img3, img4, 
    //     img3,img2, 
    //     img1, img2, img3, img4, 
    //     img3,img2, 

    // ];

    const [imageMatrix, setImageMatrix] = useState([[]]);
    const sortedImageArray = useRef([]);

    const rowCount = useRef(3);

    useEffect(() => {
        async function initialUpdate() {
          await loadAndSortImages();
          updateMatrix();
        }
      
        initialUpdate();


        const updateLevel = () => 
            {
                const width = window.innerWidth;
        
                let newRowCount = 0;
                if (width >= 1024) newRowCount = 4;
                // else if (width >= 768) newRowCount = 4;
                else if (width >= 640) newRowCount = 3;
                else newRowCount = 3;

                if (newRowCount !== rowCount.current) {
                rowCount.current = newRowCount;
                console.log('Viewport level changed →', newRowCount);

                updateMatrix();
            }
        };

        updateLevel(); // run once on load
        window.addEventListener('resize', updateLevel);

        return () => window.removeEventListener('resize', updateLevel);
      }, []);
      
    
    async function loadAndSortImages() 
    {
        const results = await Promise.all(
            imageArray.map((src, index) => {
            return new Promise(resolve => {
                const img = new Image();
                img.src = src;
                img.onload = () => {
                const heightToWidthRatio = img.naturalHeight / img.naturalWidth;
                resolve({ src, heightToWidthRatio, index });
                };
            });
            })
        );

        results.sort((a, b) => b.heightToWidthRatio - a.heightToWidthRatio);
        sortedImageArray.current = results; 
    }

    function updateMatrix()
    {
        const sortMatrix = Array.from({ length: rowCount.current }, () => []);

        const currHeights = Array.from({ length: rowCount.current }, () => 0);



        for (let i = 0; i < sortedImageArray.current.length; i++) 
        {
            let colToAdd = 0
            let min = currHeights[0];

            for (let j = 1; j < rowCount.current; j++) {
                if (currHeights[j] < min) {
                min = currHeights[j];
                colToAdd = j;
                }
            }
            
            sortMatrix[colToAdd].push(sortedImageArray.current[i].index);
            currHeights[colToAdd]+=sortedImageArray.current[i].heightToWidthRatio;
        }
        
        for (let i = 0; i < rowCount.current; i++) 
        {
            sortMatrix[i].sort();
        }

        console.log(sortMatrix)
        // console.log(imageArray[sortedSrc[0]])
        setImageMatrix(sortMatrix);   
    }


    
      



    return(
        <div className='picture-board'>
            {imageMatrix.map((row, rowIndex) => (
                <div 
                    key={rowIndex}
                    className='picture-board-column'
                >
                    {row.map((imageIndex, columnIndex) => (
                        <img
                            key={columnIndex}
                            src={imageArray[imageIndex]}
                            alt="whattttt"
                            className='picture-board-image'
                        ></img>
                    ))}
                </div>
            ))}
                    
        </div>
    );
}export default PictureBoard