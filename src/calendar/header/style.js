import {StyleSheet, Platform} from 'react-native';
import * as defaultStyle from '../../style';

const STYLESHEET_ID = 'stylesheet.calendar.header';

export default function(theme={}) {
    const appStyle = {...defaultStyle, ...theme};
    return StyleSheet.create({
        header: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding:10,
            alignItems: 'center',
            backgroundColor: appStyle.themeHeadBgColor
        },
        monthText: {
            fontSize: appStyle.textMonthFontSize,
            fontFamily: appStyle.textMonthFontFamily,
            fontWeight: '300',
            color: appStyle.monthTextColor,
            margin: 10
        },
        arrow: {
            width:20,
            height:20,
            borderRadius:10,
            justifyContent:'center',
            alignItems:'center',
            backgroundColor:'rgba(255,255,255,0.4)'
        },
        arrowImage: {
            width:12,
            height:12
        },
        week: {
            height:22,
            alignItems:'center',
            flexDirection: 'row',
            justifyContent: 'space-around',
            backgroundColor: appStyle.weekHeadBgColor
        },
        dayHeader: {
            marginTop: 2,
            marginBottom: 7,
            width: 32,
            textAlign: 'center',
            fontSize: appStyle.textDayHeaderFontSize,
            fontFamily: appStyle.textDayHeaderFontFamily,
            color: appStyle.textSectionTitleColor
        },
        ...(theme[STYLESHEET_ID] || {})
    });
}
