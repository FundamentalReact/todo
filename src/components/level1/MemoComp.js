/// memo for enhancing performance of func comp

import React from 'react'

function MemoComp({name}){
    console.log('rendering memo comp')
    return (
        <div>
              {name}
        </div>
    )
}

export default React.memo(MemoComp)              /// this react.memo is used to stop the re rendering of func comp when the name paramter is not changing in every 2s