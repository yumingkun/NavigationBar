//自定义导航组件
//ios 状态栏20 导航栏 44
//android 状态栏0 导航栏 50
import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    StatusBar,//引入状态栏
} from 'react-native';
import PropTypes from 'prop-types';


const NAV_BAR_HEIGHT_ANDROID=50;//android高度
const NAV_BAR_HEIGHT_IOS=44;//ios高度
const STAUS_BAR_HEIGHT=20;


type Props = {};
export default class NavigationBar extends Component<Props> {


    render() {
        const {titleView,title,leftButton,rightButton}=this.props;//接收用户传过来的参数
        let theTitleView=titleView?titleView:<Text style={styles.title}>{title}</Text>;//判断用户传过来的是文本还是组件
        let content=<View style={styles.navBar}>
                        {leftButton}
                        <View style={styles.titleContainer}>
                            {theTitleView}
                        </View>
                        {rightButton}
                    </View>;//整合

        return (
            <View style={[styles.container,this.props.style]} >
                {/*//状态栏*/}
                <View style={[styles.statusBar,this.props.statusBar]}>
                    <StatusBar  {...this.props.statusBar}/>{/*状态栏样式*/}
                </View>
                {/*导航栏 */}
                {content}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{

    },
    navBar:{
        justifyContent:'space-between',//两边分散有间隙
        alignItems:'center',//居中
        height:Platform.OS==='ios'?NAV_BAR_HEIGHT_IOS:NAV_BAR_HEIGHT_ANDROID,//判断平台从而设置高度
        flexDirection:'row',
        marginLeft:3,
        marginRight:3,
    },
    titleContainer:{
        justifyContent:'center',
        alignItems:'center',//居中
        position:'absolute',//绝对定位
        left:40,
        right:40,
        top:0,
        bottom:0
    },
    title:{
        fontSize:20,
        color:'white'
    },
    statusBar:{
        height:Platform.OS==='ios'?STAUS_BAR_HEIGHT:0,//判断平台从而设置高度
    }
});


//属性限制:

const StatusBarShape={//设置状态栏
    backgroundColor:PropTypes.string,
    barStyle:PropTypes.oneOf(['default','light-content','dark-content']),
    hidden:PropTypes.bool,
};
NavigationBar.propTypes={
    title:PropTypes.string,
    titleView:PropTypes.element,
    hide:PropTypes.bool,
    leftBound:PropTypes.element,
    rightBound:PropTypes.element,
    statusBar:PropTypes.shape(StatusBarShape),
};
// 为属性指定默认值:
NavigationBar.defaultProps = {
    title:'',
    hide:false,
    statusBar:{
        barStyle:'default',
        hidden:false,
    }

};




