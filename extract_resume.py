import PyPDF2

def extract_text_from_pdf(pdf_path):
    text = ""
    with open(pdf_path, 'rb') as file:
        pdf_reader = PyPDF2.PdfReader(file)
        for page_num in range(len(pdf_reader.pages)):
            text += pdf_reader.pages[page_num].extract_text()
    return text

if __name__ == "__main__":
    resume_path = "Gabriel-Silva-Resume-1.pdf"
    resume_text = extract_text_from_pdf(resume_path)
    
    # Save the extracted text to a file
    with open("resume_text.txt", "w", encoding="utf-8") as output_file:
        output_file.write(resume_text)
    
    print("Resume text extracted and saved to resume_text.txt") 