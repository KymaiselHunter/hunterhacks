import './PictureBoard.css';

import {useState, useEffect, useRef} from 'react';

function PictureBoard({profileArray})
{
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
                // else if (width >= 640) newRowCount = 3;
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
            profileArray.map((profile, index) => {
            return new Promise(resolve => {
                const img = new Image();
                const name = profile.name
                const src = profile.src
                img.src = src;
                img.onload = () => {
                const heightToWidthRatio = img.naturalHeight / img.naturalWidth;
                resolve({ src, heightToWidthRatio, index, name});
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
            
            sortMatrix[colToAdd].push(sortedImageArray.current[i]);
            currHeights[colToAdd]+=sortedImageArray.current[i].heightToWidthRatio;
        }
        
        for (let i = 0; i < rowCount.current; i++) 
        {
            sortMatrix[i].sort((a, b) => a.index - b.index);
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
                    {row.map((profile, columnIndex) => (
                        <figure
                        key={columnIndex}    
                        className='picture-board-image'
                        >
                            <img
                                    
                                    src={profile.src}
                                    alt="whattttt"
                                ></img>

                            <figcaption className='picture-board-caption'>
                                <h3 className='picture-board-caption-name'>
                                    {profile.name}
                                </h3>
                            </figcaption>
                        </figure>
                    ))}
                </div>
            ))}
                    
        </div>
    );
}export default PictureBoard