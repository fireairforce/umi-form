import React from 'react'
import { Button ,WhiteSpace, WingBlank } from 'antd-mobile'

// export default () => <Redirect to='/form' />
export default class Home extends React.Component{
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(item){
      this.props.history.push(`/${item}`)
    }
    render(){
        console.log(this.props);
        return(
            
          <WingBlank>
              <h2 style={{fontFamily:'Microsoft Yahei',fontSize:'25px',marginTop:'20px'}}>2019ACM报名表单入口</h2>

              <WhiteSpace />
            <Button type="primary" onClick={()=>{this.handleClick('jishu')}}>工程创新实训班报名表</Button><WhiteSpace /><WhiteSpace />
            <Button type="ghost" onClick={()=>{this.handleClick('jingsai')}}>ccpc/icpc竞赛实训班报名表</Button><WhiteSpace /><WhiteSpace />
            <Button type="default" onClick={()=>{this.handleClick('shengsai')}}>程序设计精英报名表</Button><WhiteSpace /><WhiteSpace />
         </WingBlank>
        )
    }
}

