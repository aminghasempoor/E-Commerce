"use client"
import {Button} from "@/components/ui/button";
import {ChevronLeft} from "lucide-react";
import Link from "next/link";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Label} from "@/components/ui/label";
import {Textarea} from "@/components/ui/textarea";
import {Input} from "@/components/ui/input";
import {Switch} from "@/components/ui/switch";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {UploadDropzone} from "@/lib/uploadThings";

function CreateProductComponent() {
    return (
        <form>
            <div className={"flex items-center gap-4"}>
                <Button variant={"outline"} size={"icon"} asChild>
                    <Link href={"/dashboard/products"}>
                        <ChevronLeft className={"w-4 h-4"}/>
                    </Link>
                </Button>
                <h1 className={"text-xl font-semibold tracking-tight"}>New Product</h1>
            </div>
            <Card className={"mt-5"}>
                <CardHeader>
                    <CardTitle>Product Details</CardTitle>
                    <CardDescription>Create yor Product</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className={"flex flex-col gap-6"}>
                        <div className="flex flex-col gap-3">
                            <Label>Name</Label>
                            <Input
                                type="text"
                                className="w-full"
                                placeholder="Product Name"
                            />
                        </div>
                        <div className={"flex flex-col gap-3"}>
                            <Label>Description</Label>
                            <Textarea placeholder={"Write your description"}/>
                        </div>
                        <div className={"flex flex-col gap-3"}>
                            <Label>Price</Label>
                            <Input type={"number"} placeholder={"$55"}/>
                        </div>
                        <div className="flex flex-col gap-3">
                            <Label>Featured Product</Label>
                            <Switch/>
                        </div>
                        <div className="flex flex-col gap-3">
                            <Label>Status</Label>
                            <Select>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select Status" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="draft">Draft</SelectItem>
                                    <SelectItem value="published">Published</SelectItem>
                                    <SelectItem value="archived">Archived</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="flex flex-col gap-3">
                            <Label>Images</Label>
                            <UploadDropzone
                                className={"ut-button:bg-rose-600 ut-label:text-lg ut-allowed-content:ut-uploading:text-rose-300"}
                                onClientUploadComplete={(res)=>{
                                    alert(res)
                                    console.log(res)
                                }}
                                onUploadError={(err)=>{
                                    alert(err)
                                    console.log(err)
                                }}
                                endpoint={"imageUploader"}
                            />
                        </div>
                    </div>
                </CardContent>
                <CardFooter className={'flex justify-end'}>
                    <Button>Submit</Button>
                </CardFooter>
            </Card>
        </form>
    )
}

export default CreateProductComponent