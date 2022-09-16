import sys, os
sys.path.append(os.path.dirname(os.path.abspath(os.path.dirname(os.path.abspath(os.path.dirname(__file__))))))
import infoCrawler

url = 'https://www.mmca.go.kr/exhibitions/progressList.do'
exb_nums = 8
titles_selector = "#listDiv li .info .tit"
dates_selector = "#listDiv li .info .txt"
thumbnails_selector = "#listDiv li .thumb img"
details_links_selector = "meta" 
details_contents_selector = "#listDiv li .info .tit"
category = "gallery"

infoCrawler.print_msm_data(
    url, 
    exb_nums,
    titles_selector, 
    dates_selector, 
    thumbnails_selector,
    details_links_selector,
    details_contents_selector,
    category,
    )

