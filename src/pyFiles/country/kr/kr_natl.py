import sys, os
sys.path.append(os.path.dirname(os.path.abspath(os.path.dirname(os.path.abspath(os.path.dirname(__file__))))))
import infoCrawler

url = 'https://www.museum.go.kr/site/main/exhiSpecialTheme/list/current'
exb_nums = 6
titles_selector = ".show-list .info a"
dates_selector = ".show-list .info-list li:first-child"
thumbnails_selector = ".show-list .img-box a > img"
details_links_selector = ".show-list .info a"
details_contents_selector = "" # 복잡함

infoCrawler.print_msm_data(
    url, 
    exb_nums,
    titles_selector, 
    dates_selector, 
    thumbnails_selector,
    details_links_selector,
    details_contents_selector,
    )

