import sys, os
sys.path.append(os.path.dirname(os.path.abspath(os.path.dirname(os.path.abspath(os.path.dirname(__file__))))))
import infoCrawler

url = 'https://www.museuoscarniemeyer.org.br/exposicoes/exposicoes'
exb_nums = 2 # only
titles_selector = ".texto .exposicoes .info h1"
dates_selector = ".texto .exposicoes .info p"
thumbnails_selector = ".texto .exposicoes img"
details_links_selector = ".texto .exposicoes a"
details_content_selector = ".texto"
category = "gallery"

infoCrawler.print_msm_data(
    url, 
    exb_nums,
    titles_selector, 
    dates_selector, 
    thumbnails_selector, 
    details_links_selector,
    details_content_selector,
    category,
    )