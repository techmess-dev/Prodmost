import { FileExtension } from "qr-code-styling";
import ParentBox from "../parent_box/ParentBox"

interface DownloadDialogProps {
	fileName: string;
	extension: FileExtension;
	onDownload: () => void;
	onUpdateOption: (key: string, value: string | FileExtension) => void;
	onClose: () => void;
}

export default function DownloadDialog({ fileName, extension, onDownload, onUpdateOption, onClose }: DownloadDialogProps) {


	return (
		<div className="fixed w-full bottom-0 bg-white dark:bg-stone-900 pt-8">
			<div className="flex pb-12 px-8">
				<div className="flex flex-grow">
					<p>Download QR Code</p>
				</div>
				<div className="flex ">
					<button className="rounded-full bg-orange-600 h-8 w-8" onClick={() => onClose()}>
						x
					</button>
				</div>
			</div>


			<div className=" w-full  min-w-[200px] gap-4 px-8 sm:hidden">

				<div className="grid mt-2 sm:mt-6">
					<ParentBox heading="File name">
						<div className={`grid h-full text-xs text-black dark:text-white`} >
							<input type="text" placeholder="Enter filename" className="h-full w-full border-t focus:outline-none px-2 text-xs"
								value={fileName} onChange={(v) => onUpdateOption('fileName', v.target.value)}
							/>
						</div>
					</ParentBox>
				</div>


				<div className="grid mt-2 sm:mt-4">
					{/* <ParentBox heading="Download as"> */}
					<div className={`grid grid-cols-4 h-full text-xs text-black dark:text-white gap-2 min-h-8`} >

						{[["PNG", "png"], ["SVG", "svg"], ["JPG", "jpg"], ["WEBP", "webp"]].map((item, index) => {

							return (<div key={index} className={`grid border-black dark:border-white border ${index === 0 ? "" : "border-l"} ${item[1] === extension ? "bg-orange-600  text-white" : ""}  border-black h-full text-center items-center cursor-pointer`} onClick={() => onUpdateOption('extension', item[1] as FileExtension)} >
								{item[0]}
							</div>)
						})}
					</div>
					{/* </ParentBox> */}
				</div>

				<div className="grid mt-8 pb-12">
					<button
						onClick={() => {
							onDownload();
						}}
						className="grid bg-orange-600 border text-xs font-mono text-white px-4 py-2 border-black cursor-pointer"
					>
						Download
					</button>
				</div>

			</div>

		</div>
	);

}