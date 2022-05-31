export enum CustomLiveChatWidgetConstants {
  CustomLiveChatWidgetFilePath = "customlivechatwidgets/CustomLiveChatWidget.html",
  LiveChatButtomId = "#oc-lcw-chat-button-title",
  LivechatButton="//div[@class='oclcw-t1']",
  DefaultTimeout = 1000,
  CustomLCWAdaptiveCardWidgetFilePath = "customlivechatwidgets/CustomLCWAdaptiveCard.html",
  CustomLCWAdaptiveCardWrapWidgetFilePath = "customlivechatwidgets/CustomLCWAdaptiveCardWrap.html",
}

export enum SelectorConstants {
  BotwaitGreetMsg = "//p[contains(text(),'Hi Customer! This is your Omnichannel Test Bot 🤖')]",
  AgentWaitMessage="//*[@class='webchat__bubble__content']/div[text()='An agent will be with you in a moment.']",
  AdaptiveCardWrapButton1="//*[@class='webchat__bubble__content']//div[@class='ac-container ac-adaptiveCard']//button[1]",
  AdaptiveCardWrapButton2="//*[@class='webchat__bubble__content']//div[@class='ac-container ac-adaptiveCard']//button[2]",
  AdaptiveCardNoEllipsis="//div[@class='webchat__bubble__content']",
  AdaptiveCardMsgWrap="//*[@class='webchat__bubble__content']//div[@class='ac-container ac-adaptiveCard']//button[contains(@aria-label,'How much')]",
  liveChatiframeName = "//iframe[@id='Microsoft_Omnichannel_LCWidget_Chat_Iframe_Window']",
  Letschat = "#oclcw-chatButton",
  AdaptivecardherocardImage="//div[@class='webchat__bubble__content']//p[text()='hero card']/following::img[@class='ac-image']",
  AdaptivecardherocardNavigate="//div[@class='webchat__bubble__content']//p[text()='hero card']/following::button[@aria-label='Get Started']",
  AdaptivecardheroCardLinkUrl = "microsoft.com",
  AdaptivecardFlightupdateImage="//*[@class='webchat__bubble__content']//div[@class='ac-container ac-adaptiveCard' and contains(@aria-label,'Flight')]//img[@class='ac-image']",
  AdaptivecardActivityUpdateNavigate="//*[@class='webchat__bubble__content']//div[@class='ac-container ac-adaptiveCard']//p[text()='Publish Adaptive Card Schema']/following::div[@class='ac-actionSet']/button[@aria-label='View']",
  AdaptivecardActivityUpdateSetduedate="//*[@class='webchat__bubble__content']//div[@class='ac-container ac-adaptiveCard']//p[text()='Publish Adaptive Card Schema']/following::div[@class='ac-actionSet']/button[@aria-label='Set due date']",
  AdaptivecardActivityUpdateSetduedateOk="//*[@class='webchat__bubble__content']//div[@class='ac-container ac-adaptiveCard']//p[text()='Publish Adaptive Card Schema']/following::div[@class='ac-actionSet']/following::button[@aria-label='OK']",
  AdaptivecardActivityUpdatelinkUrl="https://adaptivecards.io/",
  TodayCalendarValue="//*(contains(text(),'Today'))",
  AdaptivecardShowActionMsg="//*[@class='webchat__bubble__content']//div[@class='ac-container ac-adaptiveCard']//div[@class='ac-actionSet']/button[@aria-label='Action.ShowCard'][last()]",
  AdaptivecardShowActionPopup="//*[@class='webchat__bubble__content']//div[@class='ac-container ac-adaptiveCard']//div[@class='ac-actionSet']/button[@aria-label='Neat!'][last()]",
  AdaptivecardOpenurl="https://www.emirates.com/in/english/",
  AdaptivecardOpenurlActionNavigate="//*[@class='webchat__bubble__content']//div[@class='ac-container ac-adaptiveCard']//div[@class='ac-actionSet']/following::div[@class='ac-actionSet']/following::button[@aria-label='Emirates']",
  AdaptivecardOpenurlImage="//*[@class='webchat__bubble__content']//div[@class='ac-container ac-adaptiveCard']/following::img[last()]",
  AdaptivecardSubmitName="//*[@class='webchat__bubble__content']//div[@class='ac-container ac-adaptiveCard']//p[contains(text(),'Tell us about yourself')]/following::input[@aria-label='Last, First']",
  AdaptivecardSubmitEmail="//*[@class='webchat__bubble__content']//div[@class='ac-container ac-adaptiveCard']//p[contains(text(),'Tell us about yourself')]/following::input[@aria-label='youremail@example.com']",
  AdaptivecardSubmitbutton="//*[@class='webchat__bubble__content']//div[@class='ac-container ac-adaptiveCard']//p[contains(text(),'Tell us about yourself')]/following::button[@aria-label='Submit']",
  AdaptivecardInputName="//*[@class='webchat__bubble__content']//div[@class='ac-container ac-adaptiveCard']//p[contains(text(),'Input.Text elements')]/following::p[text()='Name']/following::input[@class='ac-input ac-textInput'][1]",
  AdaptivecardInputDate="//*[@class='webchat__bubble__content']//div[@class='ac-container ac-adaptiveCard']//p[contains(text(),'Input.Text elements')]/following::p[text()='Name']/following::input[@class='ac-input ac-dateInput']",
  AdaptiveCardTime="//*[@class='webchat__bubble__content']//div[@class='ac-container ac-adaptiveCard']//p[contains(text(),'Input.Text elements')]/following::p[text()='Name']/following::input[@class='ac-input ac-timeInput']",
  AdaptivecardInputSelect="//*[@class='webchat__bubble__content']//div[@class='ac-container ac-adaptiveCard']//p[contains(text(),'Input.Text elements')]/following::p[text()='Name']/following::select[@class='ac-input ac-multichoiceInput ac-choiceSetInput-compact']",
  AdaptivecardInputRadioButton="//*[@class='webchat__bubble__content']//div[@class='ac-container ac-adaptiveCard']//p[contains(text(),'Input.Text elements')]/following::p[text()='Input.ChoiceSet']/following::p[text()='Green'][1]",
  AdaptivecardInputCheckbox="//*[@class='webchat__bubble__content']//div[@class='ac-container ac-adaptiveCard']//p[contains(text(),'Input.Text elements')]/following::p[text()='Input.ChoiceSet']/following::p[text()='Green'][2]",
  AdaptivecardInputSubmitbutton="//*[@class='webchat__bubble__content']//div[@class='ac-container ac-adaptiveCard']//p[contains(text(),'Input.Text elements')]/following::button[@aria-label='Submit']",
  AdaptivecardFlightUpdate="//*[@class='webchat__bubble__content']//div[@class='ac-container ac-adaptiveCard']//p[text()='Passengers']",
  AdaptivecardToggle="//*[@class='webchat__bubble__content']//div[@class='ac-container ac-adaptiveCard']//following::button[@aria-label='Toggle!']",

  AdptivecardMsgAudio = "//div[@class='ac-textBlock']",
  AdptivecardMsgThumbnailCard ="//div[@class='ac-textBlock']",
  AdptivecardSigninCardMsg = "//div[contains(@class,'ac-container ac-adaptiveCard')]",
  AdptivecardMsgReceiptCard = "//div[@class='ac-textBlock']",
  AdptivecardThumbnailmsg = "//p[contains(text(),'Build and connect intelligent bots to interact with your users naturally wherever they are, from text/sms to Skype, Slack, Office 365 mail and other popular services.')]",
  AdptivecardThumbnailimg = "//div[@class='ac-textBlock']/following::img[last()]",
  AdptivecardGetstarted = "button[aria-label*='Get Started']",
  AdptivecardReceiptcardOrderNo = "//p[contains(text(),'1234')]",
  AdptivecardSigininCard = "button[aria-label*='Sign-in']",
  AdptivecardMoreInformation = "button[aria-label*='More information']",
  // Normal chat selectors
  NormalChatLoading="//div[@id='oc-lcw-loading-pane']",
  NoramlChatContainer="//*[@id='oc-lcw']//div[contains(@class,'webchat__basic-transcript')]",
  NoramlChatAgentWithYouMessage="//*[@id='oc-lcw']//div[contains(text(),'An agent will be with you in a moment.')]",
  NoramlChatClose="//button[@id='oc-lcw-header-close-button']",
  NoramlChatCloseConfirmation="//div[@id='oc-lcw-confirmation-pane']",
  NoramlChatConfirmCancel="//button[@aria-label='Cancel. Return to Chat']",
  NoramlChatConfirmClose="//button[@aria-label='Close Chat']",
  NoramlChatMinimize="//button[@title='Minimize']",
  SpecialSymbolAsteriskMsg="//*[@id='oc-lcw']//div[text()='You said:']/following::div[@class='webchat__bubble__content']//p[text()='*Hi']/following::div[text()='Bot WC said:']/following::p[contains(text(),'*Hi')]",
  SpecialSymbolPoundMsg="//*[@id='oc-lcw']//div[text()='You said:']/following::div[@class='webchat__bubble__content']//p[text()='#Hi']/following::div[text()='Bot WC said:']/following::p[contains(text(),'#Hi')]",
}

export enum Constants {
  Two = 2,
  Three = 3,
  Five = 5,
  MaxTimeout = 8000,
  DefaultTimeout = 2000,
  OpenWsWaitTimeout = 10000,
  DomContentLoaded = "domcontentloaded",
  EnterKey = "Enter",
  Green = "Green",
}

export const DiagnosticData = [
    "timestamp",
    "activeProviderName",
    "ClientUrl",
    "AppUrl",
    "OrgLcid",
    "OrgUniqueName",
    "OrgId",
    "UserLcid",
    "UserRoles",
    "crmVersion",
    "TenantId",
    "ocApiUrl",
    "conversationId",
    "sessionId",
    "conversationType",
    "transactionParameters",
    "liveWorkItemId",
    "channelId",
];

export const stringFormat = (str: string, ...args: any[]) =>
    str.replace(/{(\d+)}/g, (match, index) => args[index].toString() || "");
