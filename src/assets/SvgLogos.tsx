import React from "react";
import { cn } from "@/lib/utils";

interface GithubProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

export const GithubLogo: React.FC<GithubProps> = ({ className }) => {
  return (
    <svg
      width="135"
      height="48"
      viewBox="0 0 135 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(className)}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M17.43 5C7.79992 5 0 12.7999 0 22.43C0 30.1428 4.98934 36.6572 11.9178 38.9667C12.7893 39.1192 13.1161 38.5963 13.1161 38.1388C13.1161 37.7248 13.0943 36.3522 13.0943 34.8924C8.715 35.6986 7.58205 33.8249 7.23345 32.8444C7.03736 32.3433 6.18765 30.7964 5.44687 30.3824C4.83682 30.0556 3.96532 29.2495 5.42509 29.2277C6.7977 29.2059 7.77814 30.4914 8.10495 31.0143C9.67365 33.6506 12.1792 32.9098 13.1814 32.4522C13.3339 31.3193 13.7915 30.5567 14.2926 30.121C10.4144 29.6852 6.36195 28.1819 6.36195 21.5149C6.36195 19.6194 7.03736 18.0507 8.14852 16.8306C7.97422 16.3949 7.36417 14.6083 8.32282 12.2117C8.32282 12.2117 9.78259 11.7541 13.1161 13.9982C14.5105 13.6061 15.992 13.41 17.4736 13.41C18.9551 13.41 20.4367 13.6061 21.8311 13.9982C25.1646 11.7323 26.6243 12.2117 26.6243 12.2117C27.583 14.6083 26.9729 16.3949 26.7986 16.8306C27.9098 18.0507 28.5852 19.5976 28.5852 21.5149C28.5852 28.2037 24.5109 29.6852 20.6328 30.121C21.2646 30.6657 21.8093 31.7115 21.8093 33.3455C21.8093 35.6768 21.7875 37.5505 21.7875 38.1388C21.7875 38.5963 22.1143 39.141 22.9858 38.9667C26.446 37.7986 29.4527 35.5748 31.5828 32.6083C33.7129 29.6418 34.8591 26.082 34.86 22.43C34.86 12.7999 27.0601 5 17.43 5Z"
        fill="#24292E"
      />
      <path
        d="M81.2557 30.843H81.2151C81.2334 30.843 81.2456 30.8633 81.2639 30.8654H81.2761L81.2557 30.845V30.843ZM81.2639 30.8654C81.0748 30.8674 80.5989 30.9671 80.0966 30.9671C78.5105 30.9671 77.9615 30.235 77.9615 29.2793V22.9124H81.1947C81.3777 22.9124 81.5201 22.7497 81.5201 22.526V19.0691C81.5201 18.886 81.3574 18.7234 81.1947 18.7234H77.9615V14.4327C77.9615 14.27 77.8598 14.1683 77.6768 14.1683H73.2844C73.1014 14.1683 72.9997 14.27 72.9997 14.4327V18.8454C72.9997 18.8454 70.7832 19.3944 70.6409 19.4147C70.4782 19.4554 70.3765 19.5978 70.3765 19.7604V22.526C70.3765 22.7497 70.5392 22.9124 70.7222 22.9124H72.9794V29.5822C72.9794 34.544 76.4363 35.0524 78.7952 35.0524C79.873 35.0524 81.1744 34.7067 81.3777 34.605C81.4998 34.5643 81.5608 34.422 81.5608 34.2796V31.2294C81.5636 31.1429 81.5351 31.0582 81.4806 30.991C81.426 30.9238 81.3491 30.8785 81.2639 30.8633V30.8654ZM129.45 26.3897C129.45 22.709 127.965 22.221 126.399 22.3837C125.179 22.465 124.203 23.075 124.203 23.075V30.233C124.203 30.233 125.2 30.9244 126.684 30.965C128.779 31.026 129.45 30.2736 129.45 26.3897ZM134.391 26.0643C134.391 33.0392 132.134 35.032 128.189 35.032C124.854 35.032 123.064 33.3442 123.064 33.3442C123.064 33.3442 122.983 34.2796 122.881 34.4016C122.82 34.5236 122.719 34.5643 122.597 34.5643H119.587C119.384 34.5643 119.201 34.4016 119.201 34.2186L119.242 11.6264C119.242 11.4434 119.404 11.2808 119.587 11.2808H123.919C124.102 11.2808 124.264 11.4434 124.264 11.6264V19.2927C124.264 19.2927 125.932 18.215 128.372 18.215L128.352 18.1743C130.792 18.1743 134.391 19.0894 134.391 26.0643ZM116.659 18.7234H112.389C112.165 18.7234 112.043 18.886 112.043 19.1097V30.172C112.043 30.172 110.924 30.965 109.399 30.965C107.874 30.965 107.427 30.2736 107.427 28.7485V19.0894C107.427 18.9064 107.264 18.7437 107.081 18.7437H102.729C102.546 18.7437 102.384 18.9064 102.384 19.0894V29.4806C102.384 33.9543 104.885 35.0727 108.322 35.0727C111.148 35.0727 113.446 33.5069 113.446 33.5069C113.446 33.5069 113.548 34.3 113.609 34.422C113.649 34.5236 113.792 34.605 113.934 34.605H116.659C116.883 34.605 117.005 34.4423 117.005 34.2593L117.045 19.0691C117.045 18.886 116.883 18.7234 116.659 18.7234ZM68.465 18.703H64.1337C63.9507 18.703 63.788 18.886 63.788 19.1097V34.0356C63.788 34.4423 64.0523 34.5847 64.398 34.5847H68.3023C68.709 34.5847 68.8107 34.4016 68.8107 34.0356V19.0487C68.8107 18.8657 68.648 18.703 68.465 18.703ZM66.3298 11.8298C64.7641 11.8298 63.5236 13.0702 63.5236 14.636C63.5236 16.2018 64.7641 17.4423 66.3298 17.4423C67.855 17.4423 69.0954 16.2018 69.0954 14.636C69.0954 13.0702 67.855 11.8298 66.3298 11.8298ZM99.8623 11.3214H95.5716C95.3886 11.3214 95.2259 11.4841 95.2259 11.6671V19.9841H88.495V11.6671C88.495 11.4841 88.3323 11.3214 88.1493 11.3214H83.818C83.6349 11.3214 83.4723 11.4841 83.4723 11.6671V34.2593C83.4723 34.4423 83.6553 34.605 83.818 34.605H88.1493C88.3323 34.605 88.495 34.4423 88.495 34.2593V24.6002H95.2259L95.1852 34.2593C95.1852 34.4423 95.3479 34.605 95.5309 34.605H99.8623C100.045 34.605 100.208 34.4423 100.208 34.2593V11.6671C100.208 11.4841 100.045 11.3214 99.8623 11.3214ZM61.4901 21.3262V32.9985C61.4901 33.0799 61.4698 33.2222 61.3681 33.2629C61.3681 33.2629 58.8262 35.0727 54.6372 35.0727C49.5738 35.0727 43.575 33.4866 43.575 23.0344C43.575 12.5822 48.8214 10.4267 53.9458 10.447C58.3789 10.447 60.1683 11.4434 60.453 11.6264C60.5344 11.7281 60.575 11.8095 60.575 11.9111L59.721 15.5308C59.721 15.7138 59.538 15.9375 59.3143 15.8765C58.5822 15.6528 57.4841 15.2054 54.9016 15.2054C51.9123 15.2054 48.6994 16.0595 48.6994 22.7904C48.6994 29.5212 51.7497 30.3143 53.9458 30.3143C55.8167 30.3143 56.4877 30.0906 56.4877 30.0906V25.4136H53.4985C53.2748 25.4136 53.1121 25.2509 53.1121 25.0679V21.3262C53.1121 21.1432 53.2748 20.9805 53.4985 20.9805H61.1038C61.3274 20.9805 61.4901 21.1432 61.4901 21.3262Z"
        fill="#24292E"
      />
    </svg>
  );
};

export const UberLogo: React.FC<GithubProps> = ({ className }) => {
  return (
    <svg
      width="72"
      height="48"
      viewBox="0 0 72 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(className)}
    >
      <g clip-path="url(#clip0_201_8153)">
        <path
          d="M4.14324 28.8547C4.44757 29.6623 4.8689 30.3528 5.40732 30.9263C5.94573 31.4998 6.5836 31.9387 7.32091 32.243C8.0583 32.5474 8.86002 32.6995 9.72614 32.6995C10.5689 32.6995 11.3589 32.5415 12.0963 32.2254C12.8337 31.9094 13.4773 31.4646 14.0274 30.8912C14.5775 30.3176 15.0047 29.633 15.309 28.8371C15.6134 28.0412 15.7655 27.1518 15.7655 26.1686V11H19.4523V35.5787H15.8006V33.2963C14.9813 34.1624 14.0157 34.8295 12.9038 35.2978C11.7919 35.7659 10.5923 36 9.30481 36C7.99389 36 6.77084 35.7717 5.6355 35.3153C4.50024 34.8588 3.51703 34.2093 2.6861 33.3666C1.85517 32.5238 1.19967 31.5116 0.719831 30.3294C0.239918 29.1473 0 27.8306 0 26.3792V11H3.68679V26.1686C3.68679 27.1518 3.83892 28.0471 4.14324 28.8547Z"
          fill="#010202"
        />
        <path
          d="M25.8073 11V19.9536C26.6266 19.1344 27.5747 18.4848 28.6514 18.0049C29.7282 17.525 30.8987 17.2851 32.1626 17.2851C33.4736 17.2851 34.7024 17.5308 35.8494 18.0224C36.9964 18.514 37.9912 19.1811 38.834 20.0239C39.6767 20.8666 40.3439 21.8614 40.8354 23.0084C41.327 24.1555 41.5727 25.3727 41.5727 26.6601C41.5727 27.9475 41.327 29.1589 40.8354 30.2942C40.3439 31.4295 39.6767 32.4186 38.834 33.2611C37.9912 34.1039 36.9964 34.771 35.8494 35.2626C34.7024 35.7542 33.4735 35.9999 32.1626 35.9999C30.8986 35.9999 29.7224 35.76 28.6339 35.2801C27.5454 34.8003 26.5915 34.1507 25.7722 33.3314V35.5786H22.261V11H25.8073ZM26.2111 29.0829C26.5271 29.832 26.966 30.4874 27.5278 31.0492C28.0896 31.611 28.7451 32.0558 29.4941 32.3835C30.2432 32.7112 31.0508 32.8751 31.9169 32.8751C32.7596 32.8751 33.5555 32.7112 34.3045 32.3835C35.0536 32.0558 35.7031 31.6111 36.2533 31.0492C36.8034 30.4875 37.2423 29.832 37.57 29.0829C37.8977 28.3338 38.0615 27.5263 38.0615 26.6601C38.0615 25.794 37.8977 24.9806 37.57 24.2198C37.2423 23.459 36.8034 22.7978 36.2533 22.236C35.7031 21.6742 35.0536 21.2353 34.3045 20.9193C33.5554 20.6033 32.7596 20.4452 31.9169 20.4452C31.0742 20.4452 30.2783 20.6032 29.5293 20.9193C28.7803 21.2353 28.1248 21.6742 27.563 22.236C27.0012 22.7978 26.5564 23.459 26.2287 24.2198C25.901 24.9806 25.7372 25.794 25.7372 26.6601C25.7371 27.5263 25.8951 28.3338 26.2111 29.0829Z"
          fill="#010202"
        />
        <path
          d="M43.5737 23.0435C44.0418 21.9199 44.6856 20.931 45.5048 20.0766C46.3241 19.2222 47.2956 18.5492 48.4192 18.0576C49.5428 17.5661 50.76 17.3203 52.0709 17.3203C53.3583 17.3203 54.5522 17.5544 55.6524 18.0225C56.7525 18.4907 57.7006 19.1403 58.4965 19.9713C59.2923 20.8022 59.9127 21.7854 60.3574 22.9207C60.8022 24.056 61.0245 25.2908 61.0245 26.6251V27.7838H46.4529C46.57 28.5095 46.8041 29.1825 47.1552 29.8027C47.5064 30.423 47.9452 30.9614 48.4719 31.4179C48.9986 31.8744 49.5955 32.2314 50.2626 32.4888C50.9298 32.7463 51.6378 32.8751 52.3869 32.8751C54.5171 32.8751 56.2377 31.9972 57.5485 30.2416L60.1117 32.1376C59.2222 33.3315 58.122 34.2678 56.8112 34.9466C55.5003 35.6255 54.0256 35.9649 52.387 35.9649C51.0527 35.9649 49.8063 35.7307 48.6476 35.2626C47.4888 34.7945 46.4823 34.139 45.6279 33.2963C44.7735 32.4535 44.1005 31.4646 43.609 30.3293C43.1174 29.1941 42.8716 27.9592 42.8716 26.625C42.8714 25.361 43.1056 24.1671 43.5737 23.0435ZM48.507 21.6565C47.5121 22.4876 46.8509 23.5936 46.5232 24.9747H57.4432C57.1388 23.5936 56.4892 22.4876 55.4944 21.6565C54.4995 20.8256 53.335 20.4101 52.0007 20.4101C50.6664 20.4101 49.5019 20.8256 48.507 21.6565Z"
          fill="#010202"
        />
        <path
          d="M67.6607 22.0604C66.9117 22.8797 66.5371 23.9915 66.5371 25.3961V35.5788H62.9907V17.6714H66.5019V19.8835C66.9467 19.1578 67.5261 18.5843 68.24 18.163C68.9539 17.7415 69.8025 17.5308 70.7857 17.5308H72.0146V20.8314H70.5399C69.3695 20.8315 68.4097 21.2411 67.6607 22.0604Z"
          fill="#010202"
        />
      </g>
      <defs>
        <clipPath id="clip0_201_8153">
          <rect width="72" height="48" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const NotionLogo: React.FC<GithubProps> = ({ className }) => {
  return (
    <svg
      width="129"
      height="48"
      viewBox="0 0 129 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(className)}
    >
      <path
        d="M44.9356 34.7749V20.2199H45.1949L55.7896 34.7749H59.1236V13.4006H55.4192V27.919H55.1598L44.5652 13.4006H41.2312V34.7749H44.9356ZM69.6071 35.1049C74.497 35.1049 77.4976 31.9519 77.4976 26.6725C77.4976 21.4297 74.497 18.2401 69.6071 18.2401C64.7543 18.2401 61.7167 21.4297 61.7167 26.6725C61.7537 31.9519 64.7173 35.1049 69.6071 35.1049ZM69.6071 32.0252C67.014 32.0252 65.5322 30.0821 65.5322 26.6725C65.5322 23.2995 67.014 21.3198 69.6071 21.3198C72.2002 21.3198 73.682 23.2995 73.682 26.6725C73.682 30.0821 72.2002 32.0252 69.6071 32.0252ZM80.8686 14.6105V18.68H78.2755V21.6131H80.8686V30.4487C80.8686 33.6017 82.3504 34.8483 86.1289 34.8483C86.8327 34.8483 87.5366 34.7749 88.0922 34.6649V31.8053C87.6477 31.8419 87.3513 31.8786 86.8327 31.8786C85.2769 31.8786 84.573 31.182 84.573 29.5688V21.6131H88.0922V18.68H84.573V14.6105H80.8686ZM90.3149 34.7749H94.0193V18.5701H90.3149V34.7749ZM92.1671 15.8937C93.3896 15.8937 94.3898 14.9038 94.3898 13.6939C94.3898 12.4474 93.3896 11.4575 92.1671 11.4575C90.9446 11.4575 89.9444 12.4474 89.9444 13.6939C89.9444 14.9038 90.9446 15.8937 92.1671 15.8937ZM104.169 35.1049C109.059 35.1049 112.06 31.9519 112.06 26.6725C112.06 21.4297 109.059 18.2401 104.169 18.2401C99.3166 18.2401 96.279 21.4297 96.279 26.6725C96.279 31.9519 99.2426 35.1049 104.169 35.1049ZM104.169 32.0252C101.576 32.0252 100.095 30.0821 100.095 26.6725C100.095 23.2995 101.576 21.3198 104.169 21.3198C106.726 21.3198 108.244 23.2995 108.244 26.6725C108.207 30.0821 106.726 32.0252 104.169 32.0252ZM114.245 34.7749H117.95V25.3526C117.95 22.9696 119.358 21.4664 121.543 21.4664C123.803 21.4664 124.84 22.7129 124.84 25.1693V34.7749H128.545V24.2894C128.545 20.4032 126.544 18.2401 122.914 18.2401C120.469 18.2401 118.839 19.34 118.061 21.1731H117.802V18.5701H114.208C114.245 18.5701 114.245 34.7749 114.245 34.7749Z"
        fill="black"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5.71206 12.0326C6.79023 12.9024 7.18021 12.8337 9.19893 12.6964L28.2162 11.5519C28.6291 11.5519 28.285 11.1399 28.1474 11.0941L24.9816 8.82806C24.3852 8.37028 23.5594 7.82093 22.0224 7.95826L3.62452 9.30874C2.95926 9.37741 2.82162 9.72075 3.0969 9.97254L5.71206 12.0326ZM6.85905 16.4502V36.4098C6.85905 37.4857 7.38667 37.8748 8.60249 37.8061L29.5008 36.593C30.7166 36.5243 30.8543 35.7918 30.8543 34.922V15.0998C30.8543 14.23 30.5102 13.7493 29.7761 13.818L7.93723 15.0998C7.13433 15.1684 6.85905 15.5804 6.85905 16.4502ZM27.4821 17.5261C27.6197 18.1212 27.4821 18.7392 26.8857 18.8079L25.8763 19.0139V33.7547C25.0046 34.2125 24.2017 34.4871 23.5135 34.4871C22.4353 34.4871 22.16 34.1438 21.3571 33.1367L14.7733 22.8135V32.7933L16.8609 33.2511C16.8609 33.2511 16.8609 34.4642 15.1863 34.4642L10.5524 34.7389C10.4148 34.4642 10.5524 33.8005 11.0112 33.6631L12.227 33.3198V20.1355L10.5524 19.9981C10.4148 19.403 10.7589 18.5332 11.6994 18.4645L16.6774 18.1212L23.5364 28.5588V19.3343L21.793 19.1283C21.6553 18.3959 22.2059 17.8465 22.8712 17.7778L27.4821 17.5261ZM2.08754 7.47759L21.2424 6.08133C23.5823 5.87532 24.2017 6.01266 25.6698 7.08847L31.7719 11.3688C32.7812 12.1013 33.1253 12.3073 33.1253 13.1084V36.6159C33.1253 38.0808 32.5977 38.9506 30.7166 39.0879L8.48779 40.4384C7.06552 40.5071 6.40026 40.3011 5.66618 39.3626L1.147 33.5258C0.3441 32.45 0 31.6488 0 30.7104V9.81231C0 8.59917 0.550559 7.61492 2.08754 7.47759Z"
        fill="black"
      />
    </svg>
  );
};

export const MicrosoftLogo: React.FC<GithubProps> = ({ className }) => {
  return (
    <svg
      width="164"
      height="48"
      viewBox="0 0 164 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(className)}
    >
      <path
        d="M163.858 21.8339V18.9522H160.279V14.4722L160.159 14.5093L156.798 15.5377L156.731 15.5579V18.9523H151.426V17.0613C151.426 16.1808 151.623 15.507 152.011 15.0576C152.396 14.6136 152.948 14.3879 153.65 14.3879C154.156 14.3879 154.679 14.507 155.206 14.7417L155.338 14.8007V11.7659L155.276 11.743C154.784 11.5665 154.116 11.4775 153.288 11.4775C152.244 11.4775 151.296 11.7047 150.469 12.1548C149.641 12.6056 148.99 13.2492 148.534 14.0674C148.08 14.8847 147.849 15.8286 147.849 16.8732V18.9522H145.357V21.8339H147.849V33.9739H151.426V21.8339H156.731V29.5486C156.731 32.726 158.23 34.3361 161.186 34.3361C161.671 34.3361 162.183 34.2792 162.704 34.1677C163.236 34.0533 163.598 33.939 163.811 33.817L163.858 33.7891V30.8807L163.712 30.977C163.518 31.1063 163.276 31.212 162.993 31.2907C162.708 31.3707 162.471 31.4108 162.286 31.4108C161.594 31.4108 161.082 31.2242 160.764 30.856C160.442 30.4845 160.279 29.8348 160.279 28.9259V21.8339H163.858ZM137.369 31.4113C136.071 31.4113 135.047 30.9808 134.326 30.1327C133.6 29.2804 133.232 28.0653 133.232 26.5214C133.232 24.9286 133.6 23.6819 134.326 22.8146C135.048 21.9529 136.062 21.5156 137.34 21.5156C138.58 21.5156 139.568 21.9332 140.275 22.7577C140.986 23.5863 141.346 24.823 141.346 26.4344C141.346 28.0656 141.007 29.3186 140.338 30.1568C139.674 30.9887 138.675 31.4113 137.369 31.4113ZM137.528 18.5903C135.051 18.5903 133.084 19.3161 131.681 20.7476C130.279 22.1793 129.568 24.1605 129.568 26.6367C129.568 28.9886 130.262 30.8804 131.631 32.2587C132.999 33.6374 134.862 34.3358 137.166 34.3358C139.567 34.3358 141.495 33.5998 142.897 32.1485C144.299 30.6988 145.01 28.7363 145.01 26.3179C145.01 23.9292 144.343 22.0233 143.028 20.6542C141.712 19.2846 139.862 18.5903 137.528 18.5903ZM123.801 18.5903C122.116 18.5903 120.722 19.0213 119.658 19.8711C118.586 20.7259 118.043 21.847 118.043 23.2037C118.043 23.9089 118.16 24.5353 118.391 25.0667C118.623 25.5997 118.983 26.0691 119.46 26.463C119.934 26.8537 120.665 27.2629 121.634 27.6793C122.449 28.0146 123.057 28.2982 123.443 28.5217C123.82 28.7407 124.088 28.9609 124.239 29.1754C124.386 29.3852 124.46 29.6724 124.46 30.0269C124.46 31.0361 123.704 31.5271 122.149 31.5271C121.572 31.5271 120.915 31.4067 120.194 31.1692C119.478 30.9354 118.803 30.5929 118.191 30.1538L118.043 30.0473V33.4912L118.097 33.5166C118.603 33.7502 119.241 33.9473 119.994 34.1023C120.744 34.2575 121.426 34.3364 122.019 34.3364C123.847 34.3364 125.32 33.9034 126.394 33.0485C127.475 32.1878 128.023 31.0402 128.023 29.6366C128.023 28.6241 127.728 27.7558 127.147 27.0555C126.569 26.3609 125.567 25.7232 124.169 25.1595C123.055 24.7125 122.342 24.3415 122.048 24.0566C121.764 23.7815 121.62 23.3923 121.62 22.8995C121.62 22.4627 121.798 22.1127 122.163 21.8293C122.531 21.5444 123.043 21.3996 123.685 21.3996C124.281 21.3996 124.891 21.4937 125.497 21.6782C126.103 21.8627 126.636 22.1098 127.08 22.4121L127.226 22.512V19.2451L127.17 19.221C126.76 19.0452 126.219 18.8948 125.563 18.7727C124.909 18.6515 124.317 18.5903 123.801 18.5903ZM108.718 31.4113C107.42 31.4113 106.396 30.9808 105.675 30.1327C104.949 29.2804 104.581 28.0656 104.581 26.5214C104.581 24.9286 104.949 23.6819 105.675 22.8146C106.397 21.9529 107.41 21.5156 108.689 21.5156C109.929 21.5156 110.916 21.9332 111.624 22.7577C112.335 23.5863 112.695 24.823 112.695 26.4344C112.695 28.0656 112.356 29.3186 111.687 30.1568C111.023 30.9887 110.024 31.4113 108.718 31.4113ZM108.877 18.5903C106.4 18.5903 104.432 19.3161 103.03 20.7476C101.628 22.1793 100.917 24.1605 100.917 26.6367C100.917 28.9896 101.611 30.8804 102.98 32.2587C104.348 33.6374 106.211 34.3358 108.515 34.3358C110.916 34.3358 112.844 33.5998 114.247 32.1485C115.648 30.6988 116.359 28.7363 116.359 26.3179C116.359 23.9292 115.692 22.0233 114.377 20.6542C113.061 19.2846 111.21 18.5903 108.877 18.5903ZM95.487 21.5536V18.9522H91.9536V33.9736H95.487V26.2895C95.487 24.983 95.7833 23.9095 96.3679 23.0988C96.945 22.2977 97.7141 21.8917 98.6531 21.8917C98.9714 21.8917 99.3287 21.9442 99.7156 22.048C100.099 22.1512 100.376 22.2633 100.54 22.3812L100.688 22.4888V18.9265L100.631 18.9019C100.302 18.7621 99.8362 18.6916 99.2472 18.6916C98.3592 18.6916 97.5646 18.9769 96.884 19.5387C96.2866 20.0324 95.8548 20.7094 95.5246 21.5536H95.487ZM85.6258 18.5903C84.0047 18.5903 82.5588 18.9379 81.3289 19.6231C80.0965 20.31 79.1434 21.2905 78.4949 22.5373C77.8493 23.7811 77.5215 25.234 77.5215 26.8543C77.5215 28.2736 77.8393 29.5761 78.4675 30.724C79.096 31.8738 79.9855 32.7733 81.1116 33.3972C82.2361 34.0203 83.5357 34.3362 84.9746 34.3362C86.6538 34.3362 88.0876 34.0005 89.2371 33.3384L89.2835 33.3118V30.0746L89.135 30.183C88.6143 30.5623 88.0324 30.8651 87.4063 31.0832C86.7818 31.3011 86.2124 31.4113 85.7131 31.4113C84.3266 31.4113 83.2136 30.9774 82.4057 30.1221C81.596 29.2657 81.1855 28.0631 81.1855 26.5498C81.1855 25.027 81.6136 23.7935 82.4573 22.8834C83.2985 21.9759 84.4136 21.5156 85.7714 21.5156C86.9328 21.5156 88.0646 21.9088 89.1353 22.6855L89.2835 22.7932V19.3822L89.2356 19.3553C88.8327 19.1297 88.2832 18.9435 87.6009 18.8022C86.9216 18.6613 86.2571 18.5903 85.6258 18.5903ZM75.088 18.9523H71.5545V33.9736H75.088V18.9523ZM73.3574 12.5532C72.7758 12.5532 72.2686 12.7512 71.8518 13.1435C71.4334 13.5369 71.2211 14.0322 71.2211 14.6168C71.2211 15.1922 71.4308 15.6785 71.8453 16.0615C72.2571 16.4433 72.766 16.6368 73.3575 16.6368C73.9489 16.6368 74.4596 16.4433 74.8763 16.0621C75.2958 15.6785 75.5085 15.1923 75.5085 14.6168C75.5085 14.0527 75.3015 13.5624 74.8936 13.1593C74.4861 12.757 73.969 12.5532 73.3574 12.5532ZM64.5411 17.844V33.9736H68.1472V13.013H63.1562L56.8124 28.5819L50.6561 13.013H45.4619V33.9734H48.8507V17.8425H48.967L55.4679 33.9736H58.0253L64.4248 17.844H64.5411Z"
        fill="#706D6E"
      />
      <path d="M16.6225 22.6313H0V6.00879H16.6225V22.6313Z" fill="#F1511B" />
      <path
        d="M34.9757 22.6313H18.3535V6.00879H34.9757V22.6313Z"
        fill="#80CC28"
      />
      <path d="M16.622 40.991H0V24.3687H16.622V40.991Z" fill="#00ADEF" />
      <path
        d="M34.9757 40.991H18.3535V24.3687H34.9757V40.991Z"
        fill="#FBBC09"
      />
    </svg>
  );
};

export const GoogleLogo: React.FC<GithubProps> = ({ className }) => {
  return (
    <svg
      width="113"
      height="48"
      viewBox="0 0 113 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(className)}
    >
      <path
        d="M48.2375 25.6501C48.2375 30.9734 44.0732 34.896 38.9625 34.896C33.8519 34.896 29.6875 30.9734 29.6875 25.6501C29.6875 20.2894 33.8519 16.4043 38.9625 16.4043C44.0732 16.4043 48.2375 20.2894 48.2375 25.6501ZM44.1774 25.6501C44.1774 22.3236 41.7638 20.0476 38.9625 20.0476C36.1613 20.0476 33.7477 22.3236 33.7477 25.6501C33.7477 28.9433 36.1613 31.2527 38.9625 31.2527C41.7638 31.2527 44.1774 28.9391 44.1774 25.6501Z"
        fill="#EA4335"
      />
      <path
        d="M68.2468 25.6501C68.2468 30.9734 64.0824 34.896 58.9718 34.896C53.8612 34.896 49.6968 30.9734 49.6968 25.6501C49.6968 20.2936 53.8612 16.4043 58.9718 16.4043C64.0824 16.4043 68.2468 20.2894 68.2468 25.6501ZM64.1867 25.6501C64.1867 22.3236 61.7731 20.0476 58.9718 20.0476C56.1705 20.0476 53.7569 22.3236 53.7569 25.6501C53.7569 28.9433 56.1705 31.2527 58.9718 31.2527C61.7731 31.2527 64.1867 28.9391 64.1867 25.6501Z"
        fill="#FBBC05"
      />
      <path
        d="M87.4224 16.9629V33.562C87.4224 40.3901 83.3956 43.1789 78.6351 43.1789C74.1539 43.1789 71.4569 40.1817 70.4398 37.7306L73.9747 36.2591C74.6041 37.7639 76.1465 39.5397 78.631 39.5397C81.6782 39.5397 83.5665 37.6597 83.5665 34.1206V32.7909H83.4248C82.516 33.9122 80.7652 34.8918 78.5559 34.8918C73.933 34.8918 69.6978 30.865 69.6978 25.6835C69.6978 20.4645 73.933 16.4043 78.5559 16.4043C80.7611 16.4043 82.5119 17.3839 83.4248 18.4719H83.5665V16.9671H87.4224V16.9629ZM83.8541 25.6835C83.8541 22.4278 81.6823 20.0476 78.9186 20.0476C76.1173 20.0476 73.7704 22.4278 73.7704 25.6835C73.7704 28.9058 76.1173 31.2527 78.9186 31.2527C81.6823 31.2527 83.8541 28.9058 83.8541 25.6835Z"
        fill="#4285F4"
      />
      <path
        d="M93.779 7.23364V34.3292H89.8188V7.23364H93.779Z"
        fill="#34A853"
      />
      <path
        d="M109.211 28.6932L112.363 30.7941C111.346 32.299 108.895 34.8918 104.659 34.8918C99.407 34.8918 95.4844 30.8317 95.4844 25.646C95.4844 20.1477 99.4403 16.4001 104.205 16.4001C109.003 16.4001 111.35 20.2185 112.117 22.282L112.538 23.3324L100.178 28.4514C101.124 30.3064 102.596 31.2527 104.659 31.2527C106.727 31.2527 108.161 30.2356 109.211 28.6932ZM99.5112 25.3667L107.773 21.936C107.319 20.7813 105.952 19.9768 104.343 19.9768C102.279 19.9768 99.407 21.7984 99.5112 25.3667Z"
        fill="#EA4335"
      />
      <path
        d="M14.6975 23.2447V19.3221H27.9159C28.0451 20.0058 28.1118 20.8145 28.1118 21.6899C28.1118 24.6329 27.3073 28.272 24.7145 30.8648C22.1925 33.491 18.9702 34.8917 14.7016 34.8917C6.78972 34.8917 0.136719 28.4471 0.136719 20.5352C0.136719 12.6233 6.78972 6.17871 14.7016 6.17871C19.0786 6.17871 22.1967 7.89615 24.5394 10.1347L21.7715 12.9026C20.0916 11.3269 17.8155 10.1013 14.6975 10.1013C8.91985 10.1013 4.40114 14.7576 4.40114 20.5352C4.40114 26.3128 8.91985 30.9691 14.6975 30.9691C18.445 30.9691 20.5793 29.4642 21.9466 28.0969C23.0554 26.9881 23.7849 25.4041 24.0725 23.2406L14.6975 23.2447Z"
        fill="#4285F4"
      />
    </svg>
  );
};

export const TwilioLogo: React.FC<GithubProps> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="120"
      height="60"
      className={cn(className)}
    >
      <g
        transform="matrix(.486502 0 0 .486502 4.830457 17.448139)"
        fill="#e31e26"
      >
        <path d="M159.9 5.1h-12.1a.65.65 0 0 0-.6.6v7a.65.65 0 0 0 .6.6h12.1a.65.65 0 0 0 .6-.6v-7c0-.4-.2-.6-.6-.6zm-.2 10.4h-23.2c-.3 0-.7.3-.8.6l-3 11.4-.2.6-3.5-12.2c-.1-.3-.4-.6-.8-.6h-9c-.3 0-.7.3-.8.6L115 27.3l-.2.6-.2-.6-2.8-11.2c-.1-.3-.4-.6-.8-.6H92.9V5.7c0-.3-.4-.7-.8-.5L80.6 8.7c-.3.1-.6.3-.6.6v6.2h-3a.65.65 0 0 0-.6.6v8.7a.65.65 0 0 0 .6.6h3V36c0 7.5 4.1 11 11.7 11 3.1 0 6.2-.7 8.2-1.8v-9c0-.5-.4-.6-.6-.5-1.2.5-2.2.7-3.3.7-2 0-3.1-.8-3.1-3.2v-7.8h6.5a.65.65 0 0 0 .6-.6v-7.3l8.6 28.6c.1.3.4.6.8.6h9.5c.3 0 .7-.3.8-.6l4.1-12.7 4 12.6c.1.3.5.6.8.6h9.5c.3 0 .7-.3.8-.6l8.7-28.7V46a.65.65 0 0 0 .6.6h11.6a.65.65 0 0 0 .6-.6V16.1c-.1-.4-.4-.6-.7-.6zM175 5.1h-11.6a.65.65 0 0 0-.6.6V46a.65.65 0 0 0 .6.6H175a.65.65 0 0 0 .6-.6V5.7c0-.4-.3-.6-.6-.6zm15.5 0h-12.1a.65.65 0 0 0-.6.6v7a.65.65 0 0 0 .6.6h12.1a.65.65 0 0 0 .6-.6v-7c0-.4-.2-.6-.6-.6zm-.2 10.4h-11.6a.65.65 0 0 0-.6.6V46a.65.65 0 0 0 .6.6h11.6a.65.65 0 0 0 .6-.6V16.1c0-.4-.3-.6-.6-.6zm19.2-.8c-10.2 0-17.4 7.5-17.4 16.2v.1c0 8.7 7.2 16.1 17.3 16.1 10.2 0 17.4-7.5 17.4-16.2v-.1c.1-8.7-7.1-16.1-17.3-16.1zm5 16.3c0 2.9-2.1 5.4-5 5.4-2.8 0-5.1-2.4-5.1-5.5v-.1c0-2.9 2.1-5.4 5-5.4 2.8 0 5.1 2.4 5.1 5.5zM34.1-8.3C15.3-8.3 0 7 0 25.8s15.3 34.1 34.1 34.1C53 60 68.3 44.7 68.3 25.8S53-8.3 34.1-8.3zm0 59.3C20.3 51 9 39.7 9 25.8 9 12 20.3.7 34.1.7 48 .7 59.3 12 59.3 25.8 59.3 39.7 48 51 34.1 51z" />
        <circle r="7.1" cy="17.3" cx="42.6" />
        <circle r="7.1" cy="34.3" cx="42.6" />
        <circle r="7.1" cy="34.3" cx="25.6" />
        <circle r="7.1" cy="17.3" cx="25.6" />
      </g>
    </svg>
  );
};